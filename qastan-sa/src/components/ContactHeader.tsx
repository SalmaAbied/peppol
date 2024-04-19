import React, { useState, useEffect } from 'react';

function ContactHeader() {
  const [minHeight, setMinHeight] = useState("clamp(12.5rem, 60vw, 21rem)");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMinHeight("30rem");
      } else {
        setMinHeight("clamp(12.5rem, 60vw, 21rem)");
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="relative container lg:mt-20" style={{ minHeight: minHeight }}>
      <img 
        src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Shapes" 
        className="w-full h-full absolute inset-0 object-cover"
        style={{ minHeight: "100%", minWidth: "100%", objectFit: "cover" }}
      />
    </header>
  );
}

export default ContactHeader;
