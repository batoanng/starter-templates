import en from '../i18n/locales/en';
import vi from '../i18n/locales/vi';

export default {
    defaultLocale: 'en',
    fallbackLocale: 'en',
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
    messages: {
        en,
        vi,
    },
};
