import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('message', ['message', 'type']),
    },
    watch: {
        message: function (value) {
            if (typeof value !== 'undefined' && value !== '') {
                this.$bvToast.toast(value, {
                    variant: this.type,
                    solid: true,
                    toaster: 'b-toaster-top-center',
                });
                this.$store.commit('message/setMessage', '');
            }
        },
    },
};
