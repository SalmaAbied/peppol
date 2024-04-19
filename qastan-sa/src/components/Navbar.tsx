import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import myImage from './img/qastanLettersWhiteLarge.png';

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
    <nav className='bg-gray-800 shadow-lg sticky top-0 z-50'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center"> 
              <a href="/" className="flex items-center">
                <img src={myImage} alt="qastan logo" className="h-12" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 mt-3 flex items-baseline space-x-4">
              <a href="/Boekhouders" className={`text-gray-300 ${isActive('/Boekhouders') ? 'text-legoOrange' : 'hover:text-legoOrange '} px-3 py-2 rounded-md text-sm font-medium uppercase transition duration-300 ease-in-out`}>{t('Home.Navbar.Boekhouders')}</a>
              <a href="/Ondernemers" className={`text-gray-300 ${isActive('/Ondernemers') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-sm font-medium uppercase transition duration-300 ease-in-out`}>{t('Home.Navbar.Ondernemers')}</a>
              <a href="/Contact" className={`text-gray-300 ${isActive('/Contact') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-sm font-medium uppercase transition duration-300 ease-in-out`}>{t('Home.Navbar.Contact')}</a>
              <a href="/Blog" className={`text-gray-300 ${isActive('/Blog') || location.pathname.includes('/Blog/') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-sm font-medium uppercase transition duration-300 ease-in-out`}>{t('Home.Navbar.Blog')}</a>
              <select
                className='bg-gray-800 text-white font-bold m-1 border border-gray-600 rounded px-2 py-1'
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language} 
              >
                <option value="nl">NL</option> 
                <option value="fr">FR</option> 
              </select>

            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-legoOrange focus:outline-none focus:text-legoOrange focus:text-white transition duration-150 ease-in-out"
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-8 w-8`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="#eee"
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
                  stroke="#eee"
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
          <a href="/Boekhouders" className={`block text-gray-300 ${isActive('/Boekhouders') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out`}>{t('Home.Navbar.Boekhouders')}</a>
          <a href="/Ondernemers" className={`block text-gray-300 ${isActive('/Ondernemers') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out`}>{t('Home.Navbar.Ondernemers')}</a>
          <a href="/Contact" className={`block text-gray-300 ${isActive('/Contact') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out`}>{t('Home.Navbar.Contact')}</a>
          <a href="/Blog" className={`block text-gray-300 ${isActive('/Blog') || location.pathname.includes('/Blog/') ? 'text-legoOrange' : 'hover:text-legoOrange'} px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out`}>{t('Home.Navbar.Blog')}</a>
          <select
            className='bg-gray-800 text-white font-bold m-1 border border-gray-600 rounded px-2 py-1'
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language} 
          >
            <option value="nl">NL</option> 
            <option value="fr">FR</option> 
          </select>

        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
