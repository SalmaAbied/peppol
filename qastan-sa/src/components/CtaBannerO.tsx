import React from 'react';
import { useTranslation } from 'react-i18next';

const CtaBannerO: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 text-white py-4 px-4 md:flex-row md:py-6 md:px-12 lg:px-24 xl:px-32">
        <div className='md:container mx-auto md:flex md:justify-between'>
      <div className="text-lg md:text-xl lg:text-2xl text-white">{t('Ondernemers.Cta.Title')}</div>
      <a href='/Contact' className="md:mt-0 mt-2 font-bold md:mr-0 mr-2 bg-legoOrange px-5 py-3 text-white hover:text-white hover:bg-legoOrange">
      {t('Ondernemers.Cta.Button')}
      </a>
      </div>
    </div>
  );
};

export default CtaBannerO;
