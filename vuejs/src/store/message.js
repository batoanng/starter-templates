export const MessageModule = {
    state: {
        message: '',
        type: '',
    },
    mutations: {
        setMessage(state, data) {
            if (typeof data === 'string') {
                state.message = data;
                state.type = 'success';
                return;
            }
            state.message = data.message;
            state.type = data.type;
        },
    },
    namespaced: true,
};
