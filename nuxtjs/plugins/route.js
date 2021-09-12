import langOptions from '@/i18n/options';

export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        const lang = to.query.lang;
        app.i18n.locale = lang || langOptions.defaultLocale;

        return next();
    });
};
