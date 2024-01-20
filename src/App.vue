<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
<!-- component -->
<!--
  Welcome to Tailwind Play, the official Tailwind CSS playground!

  Everything here works just like it does when you're running Tailwind locally
  with a real build pipeline. You can customize your config file, use features
  like `@apply`, or even add third-party plugins.

  Feel free to play with this example if you're just learning, or trash it and
  start from scratch if you know enough to be dangerous. Have fun!
-->
  <NavBar class="z-30"/>
  <RouterView />
  <Footer />
</template>

<style scoped>
</style>
