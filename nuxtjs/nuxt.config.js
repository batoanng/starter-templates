import LangOptions from './i18n/options';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'NuxtJS Template',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'NuxtJS Template',
            },
            {
                name: 'theme-color',
                content: '#ffffff',
            },
            {
                name: 'msapplication-TileColor',
                content: '#ffffff',
            },
            {
                name: 'msapplication-TileImage',
                content: '/favicon-32x32.png',
            },
        ],
        link: [
            {
                rel: 'dns-prefetch apple-touch-icon',
                sizes: '180x180',
                href: '/apple-icon.png',
            },
            {
                rel: 'dns-prefetch icon',
                type: 'image/png',
                sizes: '192x192',
                href: '/android-chrome-192x192.png',
            },
            {
                rel: 'dns-prefetch icon',
                type: 'image/png',
                sizes: '512x512',
                href: '/android-chrome-512x512.png',
            },
            {
                rel: 'dns-prefetch manifest',
                href: '/site.webmanifest',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~assets/scss/main.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~plugins/api',
        '~plugins/axios',
        '~plugins/helpers',
        '~plugins/route',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        [
            '@nuxtjs/router',
            {
                path: 'router',
            },
        ],
        '@nuxtjs/dotenv',
    ],
    //
    styleResources: {
        scss: [
            'bootstrap/scss/bootstrap.scss',
            'bootstrap-vue/src/index.scss',
            './assets/scss/_all.scss',
        ],
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        'nuxt-i18n',
    ],
    bootstrapVue: {
        bootstrapCSS: false, // Or css: false
        bootstrapVueCSS: false, // Or bvCSS: false
    },

    i18n: LangOptions,
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.API_URL,
        common: {
            Accept: 'application/json, text/plain, */*',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        splitChunks: {
            layouts: true,
        },
        extend(config, ctx) {},
        babel: {
            compact: true,
            plugins: [
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                ['@babel/plugin-proposal-private-methods', { loose: true }],
                [
                    '@babel/plugin-proposal-private-property-in-object',
                    { loose: true },
                ],
            ],
        },
        extractCSS: true,
        optimizeCSS: true,
    },
    render: {
        http2: {
            push: true,
            pushAssets: null,
        },
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type);
            },
        },
    },
    server: {
        port: process.env.PORT || 3001, // default: 3000
        host: process.env.HOST || 'localhost', // default: localhost,
    },
};
