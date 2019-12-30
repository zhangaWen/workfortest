<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.ShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from 'components/FooterGuide/FooterGuide.vue'
export default {
  name: 'app',
  components: {
    FooterGuide
  },
  mounted () {
    this.$store.dispatch('getAddress')
  }
}
</script>

<style>
</style>
