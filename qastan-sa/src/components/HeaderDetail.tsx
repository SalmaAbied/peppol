import React, { useState, useEffect } from 'react';

type Props = { blog?: Blogpost }

function HeaderDetail({ blog }: Props) {
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
    <div>
      <header className="relative container lg:mt-20" style={{ minHeight: minHeight }}>
        <img 
          src={blog?.imageUrl} 
          alt={blog?.nl.title} 
          className="w-full h-full absolute inset-0 object-cover brightness-75" 
          style={{ minHeight: "100%", minWidth: "100%", objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex justify-center items-center text-center">
        </div>
      </header>
    </div>
  );
}

export default HeaderDetail;
