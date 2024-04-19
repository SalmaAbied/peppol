// Ondernemers pagina
import React from 'react';
import { useTranslation } from 'react-i18next';


const StepByStep = () => {
  const { t } = useTranslation();

  return (
    <div id="timeline" className="bg-white pt-20 pb-10">
        <p className="text-md uppercase  text-center">{t('Ondernemers.StepByStepB.Subtitle')}</p>
        <h2 className=" text-4xl md:text-5xl font-bold text-center">{t('Ondernemers.StepByStepB.Title')}</h2>
        <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-legoLime block mt-4 mb-6" />
      <h1 className=" text-2xl text-center md:text-3xl font-bold mb-5 pt-10">{t('Ondernemers.StepByStepB.Title2')}</h1>
      <p className="text-center max-w-[1000px] mx-auto mb-10 container">
      {t('Ondernemers.StepByStepB.Subtitle2')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
      {[
          { title: t('Ondernemers.StepByStepB.CardTitle1'), text: t('Ondernemers.StepByStepB.CardSubtitle1') },
          { title: t('Ondernemers.StepByStepB.CardTitle2'), text: t('Ondernemers.StepByStepB.CardSubtitle2') },
          { title: t('Ondernemers.StepByStepB.CardTitle3'), text: t('Ondernemers.StepByStepB.CardSubtitle3') },
          { title: t('Ondernemers.StepByStepB.CardTitle4'), text: t('Ondernemers.StepByStepB.CardSubtitle4') }
        ].map((step, index) => (
          <div key={index} className="p-6 rounded-lg rounded-t-md bg-white p-7 shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-[#b400001d]  font-bold text-lg w-12 h-12 flex justify-center items-center mr-4">{index + 1}</div>
              <h2 className="text-lg font-semibold">{step.title}</h2>
            </div>
            <p className="text-sm ">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStep;
