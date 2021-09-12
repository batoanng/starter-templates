export default function ({ app, $axios, store }) {
  $axios.onRequest((config) => {
    const accessToken = app.$cookies.get('accessToken');
    config.headers['locale'] = app.i18n.locale;
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
  });

  $axios.onError((error) => {
    const code = error.response?.status || 0;
    switch (code) {
      case 401:
      case 403:
        break;
      case 400:
        break;
      case 404:
        break;
      default:
        store.commit('message/setMessage', {
          message: error.response?.message || `An unknown error`,
          type: 'danger',
        });
        break;
    }
  });
}
