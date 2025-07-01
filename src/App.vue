<template>
 <div>
  <Header/>
  <Hero/>
  <Service/>
  <About/>
 </div>
 </template>
 <script setup>

import { onMounted } from 'vue';
import Header from '../src/components/Header.vue';
import Hero from '../src/components/Hero.vue';
import Service from '../src/components/Service.vue';
import About from '../src/components/About.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
AOS.init();
})

</script>