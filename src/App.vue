<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar class="z-30"/>
  <RouterView />
  <Footer />
</template>

<style scoped />
