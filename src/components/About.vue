<template>
    <section class="py-14 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100" id="about">
        <div class="container mx-auto px-4">
            <article data-aos="fade-up" data-aos-delay="400">
                <div class="flex flex-col lg:flex-row items-center gap-12">
                    <figure class="lg:w-5/12 relative">
                        <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto">
                            <img src="../assets/aboutImage.png" alt="About Glamour Clinic" loading="lazy"
                                class="w-full h-auto object-cover aspect-[4/5]" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                                aria-hidden="true"></div>
                        </div>
                        <span
                            class="hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-500 opacity-20 z-0"
                            aria-hidden="true"></span>
                        <span
                            class="hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-pink-600 opacity-20 z-0"
                            aria-hidden="true"></span>

                    </figure>
                    <!-- Content Coloumn -->
                    <div data-aos="fade-up" data-aos-delay="600" class="lg:w-7/12">
                        <header>
                            <h2 id="about-heading" class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                About <span class="text-pink-600">Glamour Clinic</span>
                            </h2>
                            <p class="text-lg text-gray-600 mb-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum unde qui cupiditate
                                neque accusamus rerum, doloribus sit earum deserunt ad maiores impedit ipsum beatae quod
                                dolores. Quia voluptas in animi.
                            </p>
                        </header>

                        <section class="mb-8">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4">Our Approach</h3>
                            <ul class="space-y-3">
                                <li v-for="(item, index) in approachItems" :key="index" class="flex items-start">
                                    <figure class="bg-pink-100 p-1 rounded-full mr-3">
                                        <Icon :icon="item.icon" class="text-pink-600" aria-hidden="true" />
                                    </figure>
                                    <p class="text-gray-700">{{ item.text }}</p>
                                </li>
                            </ul>
                        </section>

                        <!-- Stats Section -->
                        <section class="grid grid-cols-2 gap-4 mb-8">
                            <!-- dataApi -->
                             <!-- stats -->
                            <article v-for="(item, index) in dataApi" :key="index"
                                class="bg-white p-4 rounded-lg shadow-sm flex items-center">

                                <!-- <figure class="mr-3">
                                    <Icon :icon="item.icon" class="text-pink-500" aria-hidden="true" />
                                </figure>
                                <div>
                                    <strong class="text-xl font-bold text-gray-800">{{ item.value }}</strong>
                                    <p class="text-sm text-gray-600">{{ item.label }}</p>
                                </div> -->


                                <div>
                                    <p class="text-sm text-gray-600">{{ item.cuisine_categories }}</p>
                                    <p class="text-sm text-gray-600">{{ item.restaurant_name }}</p>
                                    <img :src="item.food_image" alt="Food image" />
                                </div>
                            </article>
                        </section>
                        <a href="javascript:;" @click="fetch"
                            class="bg-pink-600 hover:bg-pink-700 text-white text-center px-6 py-3 rounded-full inline-block transition shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2">
                            Meet Our Specialists
                        </a>
                    </div>
                </div>
            </article>

            <aside class="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                <span class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500 opacity-40"
                    aria-hidden="true"></span>
                <div class="relative z-10">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
                    <blockquote class="text-lg text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ducimus sit nostrum neque
                        esse porro laborum facere itaque eveniet alias maxime mollitia sequi, doloribus corporis
                        cumque temporibus impedit! Voluptatum, aut.
                    </blockquote>
                    <figure class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                            <Icon icon="fa-solid:user-md" class="text-pink-600" aria-hidden="true" />
                        </div>

                        <figcaption>
                            <cite class="font-semibold text-gray-800 not-italic">Dr. Sarah Johnson</cite>
                            <p class="text-sm text-gray-600">Medical Director & Founder</p>
                        </figcaption>
                    </figure>
                </div>
            </aside>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://678e0643a64c82aeb11eae21.mockapi.io/api/v1/restaurants',
    // headers: {
    //     'Authorization': 'Bearer eyJpdiI6Ino1dmdxQndWd1dHYThrQUVGTFJ6N1E9PSIsInZhbHVlIjoidkU4S3lqSXBxTTZFbGZKbUhwVldQT0VaTVAwTU5TRGFYdzloNXdhYytJeVFSQmIxNVNwb2drenk2UzgvUG1iVmNTeHpYajN2QVlvbzZzdGdHa1IrQStnRnZhN29CSzVKbExldTVqcjRTZHFId3VqeGhWQmpmT0VpWVBwKzV2RnUiLCJtYWMiOiIwNDhhM2NlOGVkYmZiYjdhZDcyMWQ4YjQzM2JhNjE1MGNlOGVmOTU3MWVkNzcyOGVjYzljODhkYjQ1MDAwMjVkIiwidGFnIjoiIn0',
    //     'Cookie': '168railway_session=eyJpdiI6IllqQjFtWXpDS200cUZTaWgrdCsxaHc9PSIsInZhbHVlIjoiYVpqZmczS3NUS2hQN1VFWXdCc2Q1WGI1Nklmb2hSTDdHRk1ZaGN2MnZHdFhaSUJ0YThkYkdUNkFSWnY4YlhpM1h5eW9xc3liUEtLdnU3TEQ4dEx5a244TFRpT2pzNVhYV3V0MVE2d0Ftbm9VNE9tcVFuKzd5WW02Vjk0clF6T1QiLCJtYWMiOiIyNDQ5N2RiZDNmMzg0NWJjZGRlZDhjYWJiYTk5YjI4NDBkY2IyNWRlZTFhZmIzZWM0OTA0NTQ2NmQwYzMwZTllIiwidGFnIjoiIn0%3D; XSRF-TOKEN=eyJpdiI6InBXUTNCUkJtRXFNbnRNcHhaUkJ2MlE9PSIsInZhbHVlIjoiNkt3RUJRK1Q4YlZoZnhleXhLakxYZHJGZHdKaTQ4cXVHWmpEQUdsN0owMklSNnBrSkwzaEkzQW1zYnV2Y21FSUo5UUNld2FSZWdqdlVCVUp5YXlWTk5WUnlqU0xqZ3pMVEhvYmp0NzVNL3lTanRjSGVuUCtFU1plSFNhMGhieWoiLCJtYWMiOiJiNDBiYzBjNWMyYTljM2IzMDIxNGE2YjczOWJhMDlkZjQ4ZjY1ZTNhMWQ5MThiZmJiODdmMDVkZTliZTY4YTg3IiwidGFnIjoiIn0%3D',
    //     'User-Agent': 'PostmanRuntime/7.44.1'
    // }
};

let dataApi = ref([])


function fetch() {
    axios.request(config)
        .then((response) => {
            // for (let index = 0; index < response.data.length; index++) {

            // }
            const dataRes = response.data.map(datas => {
                return {
                    "cuisine_categories": datas.cuisine_categories,
                    "restaurant_name": datas.restaurant_name,
                    "food_image": datas?.detail_view[0].food_image
                }
            })
            // dataApi['icon'] = response.data[index].detail_view[0].food_image;
            dataApi.value = dataRes
            console.log(dataRes)
        })
        .catch((error) => {
            console.log(error);
        });
}

const approachItems = ref([
    {
        icon: 'fa-solid:heart',
        text: 'Personalized treatment plans tailored to individual needs'
    },
    {
        icon: 'fa-solid:user-md',
        text: 'Experienced and compassionate medical professionals'
    },
    {
        icon: 'fa-solid:clinic-medical',
        text: 'State-of-the-art facilities and advanced technology'
    }
])
//API

const stats = ref([
    { value: '10+', label: 'Years Experience', icon: 'fa-solid:award' },
    { value: '2.5k+', label: 'Happy Clients', icon: 'fa-solid:heart' },
    { value: '15+', label: 'Expert Doctors', icon: 'fa-solid:user-md' },
    { value: '50+', label: 'Treatments', icon: 'fa-solid:clinic-medical' },
])
</script>