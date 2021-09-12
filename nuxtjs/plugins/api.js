import auth from '~/services/auth.service';

export default ({ $axios }, inject) => {
  const nuxtApi = {
    auth: auth($axios),
  };
  inject('api', nuxtApi);
};
