<template>
    <div class="layout">
        <Nuxt />
    </div>
</template>

<script>
import GlobalMixin from '~/mixins/global';
import { mapState } from 'vuex';
export default {
    mixins: [GlobalMixin],
    computed: {
        ...mapState('loading', ['loading']),
    },
};
</script>
