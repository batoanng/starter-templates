import en from '../i18n/locales/en';
import vi from '../i18n/locales/vi';

export default {
  locales: [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'vi',
      name: 'Vietnamese',
    },
  ],
  detectBrowserLanguage: {
    alwaysRedirect: true,
    onlyOnRoot: true,
  },
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en,
      vi,
    },
  },
};
