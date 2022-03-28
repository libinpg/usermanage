<template>
  <div id="app">
    <router-view/>
    <main-tabbar/>
    <Feature></Feature>
  </div>
</template>

<script>
import mainTabbar from "./components/content/MainTabBar/MainTabBar"

export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";

</style>
