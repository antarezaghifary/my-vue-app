<template>
  <section>
    <div class="container mx-auto px-4 mt-16">
      <header>
        <span
          class="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-pink-100 opacity"
          aria-hidden="true"
        ></span>
        <h2
          id="specialists-heading"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10"
        >
          Contact <span class="text-pink-600">Our Clinic</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
          Reach out to schedule your consultation or ask questions about our
          services
        </p>
        <span
          class="absolute -bottom-6 right-1/4 w-16 h-16 rounded-full bg-purple-100 opacity-20 z-0"
          aria-hidden="true"
        ></span>
      </header>

      <!--  -->
      <main class="flex flex-col lg:flex-row gap-12">
        <aside class="lg:w-2/5">
          <section class="bg-white rounded-2xl shadow-xl p-8 h-full">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <address class="space-y-6">
              <article
                v-for="(item, index) in contactItems"
                :key="index"
                class="flex items-start"
              >
                <figure class="bg-pink-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Icon :icon="item.icon" class="text-pink-600 text-xl" />
                </figure>
                <div>
                  <h3 class="font-semibold text-gray-800 mb-1">
                    {{ item.title }}
                  </h3>
                  <div v-html="item.content" class="text-gray-600"></div>
                </div>
              </article>
            </address>
            <figure class="mt-8 rounded-xl overflow-hidden shadow-md">
              <img
                src="../assets/contactImg.png"
                alt="Glamour Clinic Building"
                class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                width="400"
                height="200"
                loading="lazy"
              />
            </figure>
          </section>
        </aside>

        <!-- Contact Form -->
        <section class="lg:w-3/5">
          <div class="bg-white rounded-2xl shadow-xl p-8 h-full">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form class="space-y-6">
              <fieldset class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-gray-700 font-medium mb-2"
                    >Full Name</label
                  >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    for="phone"
                    class="block text-gray-700 font-medium mb-2"
                    >phone</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="+79353753959"
                    required
                  />
                </div>
              </fieldset>
              <div>
                <label for="email" class="block text-gray-700 font-medium mb-2"
                  >email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2"
                  >Service Interested In</label
                >
                <select
                  id="service"
                  name="service"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a service</option>
                  <option v-for="s in services" :key="s.value" :value="s.value">
                    {{ s.label }}
                  </option>
                </select>
              </div>

              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2"
                  >Your Message</label
                >
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your concerns or question"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                >
                </textarea>
              </div>

              <!-- </fieldset> -->

              <div>
                <button
                  type="submit"
                  class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg w-full md:w-auto"
                  aria-label="Submit contact form"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <figure
        class="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
      >
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.12%2C51.50%2C-0.10%2C51.52&amp;layer=mapnik"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          title="Clinic Location Map"
          class="rounded-2xl"
          aria-label="Map showing clinic loction"
        ></iframe>
      </figure>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const contactItems = ref([
  {
    icon: "fa-solid:map-marker-alt",
    title: "Our Location",
    content: `
            <p>123 Beauty Avenue,Medical District<br /> Casablanca 11564,Morocco </p>
        `,
  },
  {
    icon: "fa-solid:phone-alt",
    title: "Phone Numbers",
    content: `
            <p>Appointments:<a href='tel:+8748748748' class='hover:text-pink-600'>+8748748748</a><br /> Emergency:<a href='tel:+8748748748' class='hover:text-pink-600'> +8748748748 </p>
        `,
  },
  {
    icon: "fa-solid:envelope",
    title: "Email",
    content: `
            <p>Appointments:<a href='tel:+8748748748' class='hover:text-pink-600'>+8748748748</a><br /> Emergency:<a href='tel:+8748748748' class='hover:text-pink-600'> +8748748748 </p>
        `,
  },
  {
    icon: "fa-solid:clock",
    title: "Working Hours",
    content: `
            <p>Sunday - Thursday: 9:00 AM - 8:00 PM<br />
                Friday : 2:00 AM - 9:00 PM<br />
                Saturday : Closed
                 </p>
        `,
  },
]);

const services = ref([
  { value: "botox", label: "Botox Treatments" },
  { value: "fillers", label: "Dermal Fillers" },
  { value: "laser", label: "Laser Therapy" },
  { value: "facelift", label: "Non-Surgical Facelift" },
  { value: "other", label: "Other" },
]);
</script>
