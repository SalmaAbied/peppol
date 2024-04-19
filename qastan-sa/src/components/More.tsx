import React from 'react';
import { useTranslation } from 'react-i18next';

function More() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto">
      <p className="text-md uppercase  text-center">{t('Home.More.Subtitle')}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-center">{t('Home.More.Title')}</h2>
      <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-legoLime block mt-4 mb-6" />
      <div className="gap-6 flex flex-wrap justify-center">
        <div className="relative bg-gray-800 overflow-hidden shadow-lg w-96 rounded-lg rounded-t-md border-t-4 border-legoOrange shadow-2xl">
          <div className="relative w-full h-96">
            <img
              src="https://images.unsplash.com/photo-1507831228884-93d43e81a99d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="absolute inset-0 w-full h-full transition duration-500 opacity-75 hover:opacity-90 cursor-pointer object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-start p-6 pointer-events-none">
            <h3 className="text-white text-lg font-semibold mb-2 pointer-events-none">{t('Home.More.CardTitleB')}</h3>
            <p className="text-white font-bold text-sm mb-4 pointer-events-none">{t('Home.More.CardSubtitleB')}</p>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
            <a href="/Boekhouders" className="block hover:opacity-100 transition duration-500 w-fit md:mt-0 mt-2 font-medium md:mr-0 mr-2 bg-[#fff2dd] px-5 py-3  hover:bg-[#fff2de]">
              {t('Home.More.CardButtonB')}
            </a>
          </div>
        </div>
        <div className="relative bg-gray-800 overflow-hidden shadow-lg w-96 rounded-lg rounded-t-md border-t-4 border-legoPink shadow-2xl">
          <div className="relative w-full h-96">
            <img
              src="https://images.unsplash.com/photo-1664575601786-b00156752b61?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="absolute inset-0 w-full h-full transition duration-500 opacity-75 group-hover:opacity-90 cursor-pointer object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-start p-6 pointer-events-none">
            <h3 className="text-white text-lg font-semibold mb-2 pointer-events-none">{t('Home.More.CardTitleO')}</h3>
            <p className="text-white font-bold text-sm mb-4 pointer-events-none">{t('Home.More.CardSubtitleO')}</p>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
            <a href="/Ondernemers" className="block hover:opacity-100 transition duration-500 group w-fit md:mt-0 mt-2 font-medium md:mr-0 mr-2 bg-[#fff2dd] px-5 py-3  hover:bg-[#fff2de]">
              {t('Home.More.CardButtonO')}
            </a>
          </div>
        </div>
        <div className="relative bg-gray-800 overflow-hidden shadow-lg w-96 rounded-lg rounded-t-md border-t-4 border-legoBlue shadow-2xl">
          <div className="relative w-full h-96">
            <img
              src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="absolute inset-0 w-full h-full transition duration-500 opacity-75 group-hover:opacity-90 cursor-pointer object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-start p-6 pointer-events-none">
            <h3 className="text-white text-lg font-semibold mb-2 pointer-events-none">{t('Home.More.CardTitleBlog')}</h3>
            <p className="text-white font-bold text-sm mb-4 pointer-events-none">{t('Home.More.CardSubtitleBlog')}</p>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
            <a href="/Blog" className="block hover:opacity-100 transition duration-500 w-fit md:mt-0 mt-2 font-medium md:mr-0 mr-2 bg-[#fff2dd] px-5 py-3  hover:bg-[#fff2de]">
              {t('Home.More.CardButtonBlog')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default More;
