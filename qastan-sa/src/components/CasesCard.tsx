import React from 'react';
import { useTranslation } from 'react-i18next';

const Cases: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto my-20">
      <h2 className="text-center text-3xl font-bold md:mb-5 pt-10">{t('Boekhouders.Cases.Title')}</h2>

      <p className="text-center text-sm lg:text-lg max-w-3xl mx-auto mb-10">{t('Boekhouders.Cases.Subtitle')}</p>

      <div className="flex flex-col gap-6 mt-16">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full lg:w-1/4  overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Case" className="w-full h-full object-cover aspect-video lg:aspect-square" />
          </div>
          <div className="w-full lg:w-9/12 bg-[#b400001d] flex flex-col justify-center p-8 lg:p-14">
            <h3 className="text-2xl  font-semibold">{t('Boekhouders.Cases.CaseTitle1')}</h3>
            <span className="inline-block text-xl  font-light mt-1.5 mb-5">{t('Boekhouders.Cases.CaseName1')}</span>
            <p className=" opacity-75">{t('Boekhouders.Cases.CaseBeroordeling1')}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
        <div className="md:order-1 w-full lg:w-1/4  overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Case" className="w-full h-full object-cover aspect-video lg:aspect-square" />
          </div>
          <div className="w-full lg:w-9/12 bg-[#fcac0027] flex flex-col justify-center p-8 lg:p-14">
            <h3 className="text-2xl  font-semibold">{t('Boekhouders.Cases.CaseTitle2')}</h3>
            <span className="inline-block text-xl  font-light mt-1.5 mb-5">{t('Boekhouders.Cases.CaseName2')}</span>
            <p className=" opacity-75">{t('Boekhouders.Cases.CaseBeroordeling2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
