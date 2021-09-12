export const LoadingModule = {
    state: {
        loading: false,
    },
    mutations: {
        setLoading(state, data) {
            state.loading = data;
        },
    },
    namespaced: true,
};
