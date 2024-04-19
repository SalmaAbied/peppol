import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Banner() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="container mx-auto bg-[#eff6fa] py-12 sm:py-16 lg:py-20 mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-lg font-medium text-legoOrange">{t('Home.Banner.Badge')}</h2>
          <h1 className="mb-2 text-2xl font-normal md:text-4xl" dangerouslySetInnerHTML={{ __html: t('Home.Banner.Title') }}></h1>
          <p className="text-md font-normal text-gray-500 lg:text-base">
            {t('Home.Banner.Introduction')}
          </p>
          <div className="flex items-center justify-between cursor-pointer">
            <h2 className='my-2 text-xl font-medium md:text-2xl'>
              {t('Home.Banner.Title1')}
            </h2>
          </div>
          <p className="text-md font-normal text-gray-500 lg:text-base">
            {t('Home.Banner.Paraghraphe1')}
          </p>
          <div className="transition-all ease-in-out duration-700 overflow-hidden" style={{ maxHeight: isExpanded ? '1000px' : '0' }}>
            <h2 className='my-2 text-xl font-medium md:text-2xl'>
              {t('Home.Banner.Title2')}
            </h2>
            <p className="text-md font-normal text-gray-500 lg:text-base">
              {t('Home.Banner.Paraghraphe2')}
            </p>
            <h2 className='my-2 text-xl font-medium md:text-2xl'>
              {t('Home.Banner.Title3')}
            </h2>
            <p className="text-md font-normal text-gray-500 lg:text-base">
              {t('Home.Banner.Paraghraphe3')}
            </p>
          </div>
          <div className="flex items-center text-sm font-base cursor-pointer" onClick={toggleAccordion}>
            <span className="mr-2 font-medium">{isExpanded ? t('Home.Banner.ReadLess') : t('Home.Banner.ReadMore')}</span>
            {isExpanded ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
