import Grid from './Grid';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation(); 

  return (
    <section className="container mx-auto pt-20 md:flex">
      <div className="px-4 flex flex-col justify-center md:px-12 md:w-1/2">
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl mb-6">
          <span>{t('Home.Hero.Title')}</span> <span className="text-legoOrange">Peppol</span>
        </h1>
        <p className="font-light text-xs md:text-base mb-3">
          {t('Home.Hero.Subtitle')}
        </p>
        <button className="w-fit font-bold bg-legoOrange mb-3 mt-2 md:mt-0 mr-2 md:mr-0 px-5 py-3 text-sm text-white transition duration-500 hover:bg-legoBlue">{t('Home.Hero.Registreer')}</button>
      </div>
      <Grid />
    </section>
  );
};

export default Hero;
