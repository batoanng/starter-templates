export default ($axios) => ({
  login: (data) => {
    return $axios.post(`/users/login`, data);
  },
});
