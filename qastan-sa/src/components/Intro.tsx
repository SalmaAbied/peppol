import React from 'react';
import Video from './VideoPlayer';
import { useTranslation } from 'react-i18next';


function Intro() {
  const { t } = useTranslation(); 

  return (
    <div className="container relative mx-auto my-20 grid lg:grid-cols-4 gap-4">
      <div className="md:col-span-2 relative">
        <div className="aspect-w-16 aspect-h-9">
          <Video />
        </div>
      </div>
      <div className="md:col-span-2 relative">
        <h1 className="mb-2 text-2xl font-normal md:text-4xl relative z-10">
          {t('Home.Intro.Title')}
        </h1>
        <p className="lg:w-11/12 text-md font-normal  lg:text-base text-balance relative z-10">
          {t('Home.Intro.Subtitle')}
        </p>
        <div className="absolute top-0 right-0 hidden lg:flex">
          <div className="w-4 h-4 bg-legoRed md:w-8 md:h-8"></div>
          <div className="w-4 h-4 bg-legoBlue md:w-8 md:h-8"></div>
          <div className="flex flex-col">
            <div className="w-4 h-4 bg-legoOrange md:w-8 md:h-8"></div>
            <div className="w-4 h-4 bg-legoYellow md:w-8 md:h-8"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 hidden lg:flex">
          <div className="flex flex-col">
            <div className="w-4 h-4 bg-legoOrange md:w-8 md:h-8"></div> 
            <div className="flex">
              <div className="w-4 h-4 bg-legoYellow md:w-8 md:h-8"></div> 
              <div className="w-4 h-4 bg-legoRed md:w-8 md:h-8"></div> 
              <div className="w-4 h-4 bg-legoBlue md:w-8 md:h-8"></div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;