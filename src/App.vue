<template>
 <div>
  <Header/>
  <Hero/>
  <Service/>
  <About/>
  <Specialist/>
  <Contact/>
  <Footer/>
 </div>
 </template>
 <script setup>

import { onMounted } from 'vue';
import Header from '../src/components/Header.vue';
import Hero from '../src/components/Hero.vue';
import Service from '../src/components/Service.vue';
import About from '../src/components/About.vue';
import Specialist from './components/Specialist.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
AOS.init();
})

</script>