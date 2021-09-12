import options from '~/i18n/options';
import Home from '~/pages/Home/Home';

const initLocale = (routes) => {
    const result = [];
    routes.forEach((route) => {
        options.locales.forEach((locale) => {
            let resultRoute = {
                ...route,
                path: route.path,
                name: route.name + '___' + locale.code,
            };
            if (locale.code !== options.defaultLocale) {
                resultRoute.path = '/' + locale.code + route.path;
            }
            result.push(resultRoute);
        });
    });
    return result;
};

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
];

export default initLocale(routes);
