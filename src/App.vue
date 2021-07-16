<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <!-- <v-footer></v-footer> -->
  </div>
</template>

<script>
import header from '@/components/header'
import footer from '@/components/footer';
export default {
  name: 'App',
  components:{
    'v-header': header,
    'v-footer': footer,
  }
}
</script>

<style>
  @import url("./assets/css/base.css");
</style>
