<template>
  <div id="app">
    <router-view></router-view>
    <div class="tab-bar">
      <router-link :to="{ name: 'home' }" exact-active-class="active">
        home
      </router-link>
      <router-link :to="{ name: 'store' }" exact-active-class="active">
        store
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "assets/stylesheets/app";
</style>
