import React from 'react';
import { useTranslation } from 'react-i18next';

function CookiesPrivacy() {
  const { t } = useTranslation();

  return (
    <>
      <div className='justify-center my-20'>
        <p className="text-md uppercase text-center">{t('Cookies.PrivacySubtitle')}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center">{t('Cookies.PrivacyTitle')}</h2>
        <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-legoAzure block mt-4 mb-6" />
      </div>
      <div className='container mx-auto mb-20'>
        <div>
          <h1 className="text-2xl text-left md:text-3xl font-bold mb-5 pt-10">{t('Cookies.PrivacyStatement')}</h1>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.GeneralTerms')}</h2>
          <p>{t('Cookies.GeneralTermsContent')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.Questions')}</h2>
          <p>{t('Cookies.QuestionsContent')} <a href='mailto:info@qastan.be' className='text-legoOrange font-bold'>{t('Cookies.ContactEmail')}</a></p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.DataProcessing')}</h2>
          <p>{t('Cookies.DataProcessingContent1')}</p>
          <ul className="list-disc list-inside pl-4 pt-2 pb-5">
            <li>{t('Cookies.DataProcessingList1')}</li>
            <li>{t('Cookies.DataProcessingList2')}</li>
            <li>{t('Cookies.DataProcessingList3')}</li>
            <li>{t('Cookies.DataProcessingList4')}</li>
            <li>{t('Cookies.DataProcessingList5')}</li>
            <li>{t('Cookies.DataProcessingList6')}</li>
          </ul>
          <p>{t('Cookies.DataProcessingContent2')}</p>
          <ul className="list-disc list-inside pl-4 pt-2 pb-5">
            <li>{t('Cookies.DataProcessingList7')}</li>
            <li>{t('Cookies.DataProcessingList8')}</li>
            <li>{t('Cookies.DataProcessingList9')}</li>
            <li>{t('Cookies.DataProcessingList10')}</li>
            <li>{t('Cookies.DataProcessingList11')}</li>
          </ul>
          <p>{t('Cookies.DataProcessingContent3')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.RetentionPeriod')}</h2>
          <p>{t('Cookies.RetentionPeriodContent')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.Security')}</h2>
          <p>{t('Cookies.SecurityContent1')}</p>
          <p>{t('Cookies.SecurityContent2')}</p>
          <p>{t('Cookies.SecurityContent3')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.Rights')}</h2>
          <p>{t('Cookies.RightsContent')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.Complaints')}</h2>
          <p>{t('Cookies.ComplaintsContent')}</p>
        </div>
        <div>
          <h1 className="text-2xl text-left md:text-3xl font-bold mb-5 pt-10">{t('Cookies.CookiesGDPR')}</h1>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.CookiesGeneralTerms')}</h2>
          <p>{t('Cookies.CookiesGeneralTermsContent')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.WhatAreCookies')}</h2>
          <p>{t('Cookies.WhatAreCookiesContent')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.FunctionalCookies')}</h2>
          <p>{t('Cookies.FunctionalCookiesContent')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.AnalyticalCookies')}</h2>
          <p>{t('Cookies.AnalyticalCookiesContent1')}</p>
          <ul className="list-disc list-inside pl-4 pt-2 pb-5">
            <li>{t('Cookies.AnalyticalCookiesList1')}</li>
            <li>{t('Cookies.AnalyticalCookiesList2')}</li>
            <li>{t('Cookies.AnalyticalCookiesList3')}</li>
            <li>{t('Cookies.AnalyticalCookiesList4')}</li>
            <li>{t('Cookies.AnalyticalCookiesList5')}</li>
            <li>{t('Cookies.AnalyticalCookiesList6')}</li>
          </ul>
          <p>{t('Cookies.AnalyticalCookiesContent2')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.WebsitesAndCookies')}</h2>
          <p>{t('Cookies.WebsitesAndCookiesContent')}</p>
          <ul className="list-disc list-inside pl-4 pt-2">
            <li>
          Google Chrome: https://support.google.com/chrome/answer/95647?hl=nl
          </li>
          <li>
          Firefox: https://support.mozilla.org/nl/kb/cookies-in-en-uitschakelen-websites-voorkeuren
          </li>
          <li>
          Edge: https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy
          </li>
          <li>
          Internet Explorer: https://support.microsoft.com/nl-nl/help/17442/windows-internet-explorer-delete-manage-cookies
          </li>
          <li>
          Safari: https://support.apple.com/nl-be/HT201265
          </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.Changes')}</h2>
          <p>{t('Cookies.ChangesContent')}</p>
        </div>
        <div>
          <h2 className="text-xl text-left md:text-2xl font-bold mb-5 pt-10">{t('Cookies.QuestionsFooter')}</h2>
          <p>{t('Cookies.QuestionsFooterContent')} <a href='mailto:info@qastan.be' className='text-legoOrange font-bold'>{t('Cookies.ContactEmail')}</a></p>
        </div>
      </div>
    </>
  );
}

export default CookiesPrivacy;