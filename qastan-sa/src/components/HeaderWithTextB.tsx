import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function HeaderWithText() {
  const { t } = useTranslation();
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
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shapes"
          className="w-full h-full absolute inset-0 object-cover brightness-50"
          style={{ minHeight: "100%", minWidth: "100%", objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex justify-center items-center text-center">
          <div>
            <h1 className="text-white text-2xl lg:text-4xl font-bold">{t('Boekhouders.Header.Title')}</h1>
            <p className="text-white text-sm lg:text-base">{t('Boekhouders.Header.Subtitle')}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderWithText;
