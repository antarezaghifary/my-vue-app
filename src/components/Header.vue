<template>
    <header class="bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0 z-50">
        <div class = "max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
            <!-- Logo -->
             <a href="/" class="flex items-center focus:outline-none focus:ring-2 focus:ring-pink-600
             rounded">
                <h1 class="text-2xl font-bold text-pink-600">Glamout Clinic</h1>
            </a>
            <!-- Desktop Navigation -->
             <nav class="hidden md:flex space-x-6" aria-label="Primary navigation">
                <a v-for="(link,index) in navLinks" :key="index" :href="link.href"
                class="text-gray-700 hover:text-pink-600 transition-colors duration-200 focus:outline-none
                focus:ring-2 focus:ring-pink-600 rounded">{{ link.label }}</a>
             </nav>
             <!-- Appointment Button -->
              <div class="hidden md:block">
                <a href="#appoinment"
                class="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full transition-colors duration-200
                shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
                >Book Appoinment</a>
              </div>
              <!-- Mobile Menu Button -->
               <button
               class="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 rounded"
               @click="toogleMenu" aria-label="Toogle menu" :aria-expanded="isMenuOpen.toString()" aria-controls="mobile-menu">
              <Icon :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu' " class="w-6 h-6"/>
            </button>
        </div>

        <!-- Mobile Menu -->
         <aside v-if="isMenuOpen" id="mobile-menu"
         class="md:hidden bg-white shodow-lg py-4 px-4 absolute top-full left-0 right-0 z-40">
         <nav aria-label="Mobile Navigation">
            <ul class="flex flex-col space-y-4">
                <li v-for="(link,index) in navLinks" :key="index">
                    <a href="link.href"
                    class="block text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2 px-2 focus:outline-none
                    focus:ring-2 focus:ring-pink-600 rounded" @click="toogleMenu">
                    {{  link.label }}
                </a>
                </li>
                <li>
                    <a href="#appointment"
                    class=" bg-pink-600 hover:bg-pink-700 text-white text-center px-4 py-2 rounded-full transition-colors duration-200
                shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
                @click="toogleMenu">Book Appoinment</a>
                </li>
            </ul>

         </nav>
        </aside>
        
    </header>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const navLinks =ref([
    {href:'#home',label:'Home'},
    {href:'#services',label:'Service'},
    {href:'#about',label:'About'},
    {href:'#specialists',label:'Specialists'},
    {href:'#contact',label:'Contact'},
    ]);
    const isMenuOpen = ref(false)
    const toogleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };
</script>