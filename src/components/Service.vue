<template>
    <section id="services" class="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
        aria-labelledby="services-heading">
        <div class="container mx-auto px-4">

            <!-- Section Header -->
            <header data-aos="fade-up" data-aos-delay="500" class="text-center mb-16">
                <h2 id="services-heading" class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our <span class="text-pink-600">Premium Services</span>
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover our range of specialized cosmetic treatments designed to enhance your natural beauty
                </p>
            </header>

            <!-- Services Grid -->
            <ul data-aos="fade-up" data-aos-delay="500" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            gap-8">
                <li v-for="(services, index) in services" :key="index">
                    <article class="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-100">
                        <figure class="mb-6">
                            <Icon :icon="services.icon" class="text-4xl text-pink-600" aria-hidden="true" />
                        </figure>

                        <h3 class="text-xl font-bold text-gray-800 mb-3">
                            {{ services.title }}
                        </h3>

                        <p class="text-gray-600 mb-6 flex-grow">
                            {{ services.description }}
                        </p>

                        <a :href="services.link" class="group inline-flex items-center gap-2 text-pink-600 font-semibold
                     hover:text-pink-700 transition-colors mt-auto" :aria-label="`Learn more about ${services.title}`">

                            <span class="relative">
                                Learn more
                                <span
                                    class="absolute left-0 -bottom-0.5 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left">
                                </span>
                            </span>
                            <Icon icon="weui:arrow-outlined"
                                class="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </article>
                </li>
            </ul>

            <!-- CTA Section -->
            <footer data-aos="fade-up" data-aos-delay="600" class="mt-20 text-center">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">
                    Ready to transform your look?
                </h3>
                <a href="#appointment"
                    class="bg-pink-600 hover:bg-pink-700 text-white text-center px-8 py-3 rounded-full inline-block transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2">
                    Book a Consultation Now
                </a>
            </footer>


        </div>
    </section>

</template>
<script setup>
import { ref } from 'vue'
const services = ref([
    {
        icon: 'fa-solid:clinic-medical',
        title: 'Facelift Procedures',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, itaque.',
        link: '#facelift'
    },
    {
        icon: 'fa-solid:user-md',
        title: 'Botox & Fillers',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, itaque.',
        link: '$botox'
    },
    {
        icon: 'fa-solid:smile',
        title: 'Laser Treatments',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, itaque.',
        link: '#laser'
    },
    {
        icon: 'fa-solid:syringe',
        title: 'Body Contouring',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, itaque.',
        link: '#contauring'
    }
])

</script>