<template>
  <div class="home">
    <img :src="require('@/assets/images/logo.png')" alt="Logo" />
    <h1 class="hello">{{ $t('home.hello') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    // Demo using plugin $helpers
    isEmail(text) {
      return this.$helpers.isEmail(text);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Home';
</style>
