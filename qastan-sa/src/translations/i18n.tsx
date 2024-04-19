import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import nlTranslation from './nl/translation.json';
import frTranslation from './fr/translation.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      nl: {
        translation: nlTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    fallbackLng: 'nl', 
    debug: true, 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;