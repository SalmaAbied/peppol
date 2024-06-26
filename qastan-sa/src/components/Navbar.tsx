import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import myImage from './img/logo.png';
const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      localStorage.setItem('selectedLanguage', lng); 
    });
  };

  useEffect(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage); 
    }
  }, []); 

  return (
    <>
    <nav className='bg-white text-gray-800 shadow-lg sticky top-0 z-50'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center"> 
              <a href="/" className="flex items-center">
                <img src={myImage} alt="qastan logo" className="h-14" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 mt-3 flex items-baseline space-x-4">
              <a href="/Boekhouders" className={`text-gray-800 ${isActive('/Boekhouders') ? 'text-legoOrange' : 'hover:text-legoOrange '} px-3 py-2 rounded-md text-sm font-semibold uppercase transition duration-300 ease-in-out`}>{t('Home.Navbar.Boekhouders')}</a>
              <a href="/Ondernemers" className={`text-gray-800 ${isActive('/Ondernemers') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-sm font-semibold uppercase transition duration-300 ease-in-out`}>{t('Home.Navbar.Ondernemers')}</a>
              <a href="/Contact" className={`text-gray-800 ${isActive('/Contact') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-sm font-semibold uppercase transition duration-300 ease-in-out`}>{t('Home.Navbar.Contact')}</a>
              <a href="/Blog" className={`text-gray-800 ${isActive('/Blog') || location.pathname.includes('/Blog/') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-sm font-semibold uppercase transition duration-300 ease-in-out`}>{t('Home.Navbar.Blog')}</a>
              {/* start changeLanguage */}
              <div className='flex'>
                <p className={`duration-300 hover:text-legoOrange font-bold ${i18n.language === 'nl' ? 'text-legoOrange' : 'text-gray-800'}`} onClick={() => changeLanguage("nl")} style={{ cursor: 'pointer' }}>
                  NL
                </p>
                <p className='mx-2 text-gray-800 font-bold'>|</p>
                <p className={`duration-300 hover:text-legoOrange font-bold ${i18n.language === 'fr' ? 'text-legoOrange' : 'text-gray-800'}`} onClick={() => changeLanguage("fr")} style={{ cursor: 'pointer' }}>
                  FR
                </p>
              </div>
              {/* einde changeLanguage */}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2"
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-8 w-8`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="#1F2937"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  style={{ transition: 'opacity 0.5s ease-in-out' }}
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-8 w-8`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="#1F2937"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  style={{ transition: 'opacity 0.5s ease-in-out' }}
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a href="/Boekhouders" className={`block text-gray-800 ${isActive('/Boekhouders') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-base font-semibold transition duration-300 ease-in-out`}>{t('Home.Navbar.Boekhouders')}</a>
          <a href="/Ondernemers" className={`block text-gray-800 ${isActive('/Ondernemers') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-base font-semibold transition duration-300 ease-in-out`}>{t('Home.Navbar.Ondernemers')}</a>
          <a href="/Contact" className={`block text-gray-800 ${isActive('/Contact') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-base font-semibold transition duration-300 ease-in-out`}>{t('Home.Navbar.Contact')}</a>
          <a href="/Blog" className={`block text-gray-800 ${isActive('/Blog') || location.pathname.includes('/Blog/') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-base font-semibold transition duration-300 ease-in-out`}>{t('Home.Navbar.Blog')}</a>
      
          <div className='pl-3 flex'>
                <p className={`duration-300 hover:text-legoOrange font-bold ${i18n.language === 'nl' ? 'text-legoOrange' : 'text-gray-800'}`} onClick={() => changeLanguage("nl")} style={{ cursor: 'pointer' }}>
                  NL
                </p>
                <p className='mx-2 text-gray-800 font-bold'>|</p>
                <p className={`duration-300 hover:text-legoOrange font-bold ${i18n.language === 'fr' ? 'text-legoOrange' : 'text-gray-800'}`} onClick={() => changeLanguage("fr")} style={{ cursor: 'pointer' }}>
                  FR
                </p>
            </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
