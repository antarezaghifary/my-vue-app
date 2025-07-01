<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <section class="lg:col-span-2">
          <header class="flex items-center mb-6">
            <Icon
              icon="fa-solid:clinic-medical"
              class="text-3xl text-pink-500 mr-3"
              aria-hidden="true"
            />
            <h2 class="text-2xl font-bold">Glamour Clinic</h2>
          </header>
          <p class="text-gray-400 mb-6">
            Premier cosmetic clinic dedicated to enhancing your natural beauty
            with state-of-the-art treatments and personalized care in Casablanca
          </p>
          <nav aria-label="Social media links">
            <ul class="flex space-x-4">
              <li v-for="(item, index) in socialLinks" :key="index">
                <a
                  href="#"
                  class="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                  :aria-label="item.label"
                >
                  <Icon :icon="item.icon" class="text-lg" />
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section>
          <h3
            class="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500"
          >
            Quick Links
          </h3>
          <nav aria-label="Quick links">
            <ul class="space-y-3">
              <li v-for="(item, index) in quickLinks" :key="index">
                <a
                  :href="item.href"
                  class="text-gray-400 hover:text-pink-500 transition"
                >
                  {{ item.text }}
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <address>
          <h3
            class="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500"
          >
            Contact Us
          </h3>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in contactInfo"
              :key="index"
              class="flex items-start"
            >
              <Icon
                :icon="item.icon"
                class="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0"
              />
              <component
                :is="item.content.type"
                v-bind="item.content.props"
                class="text-gray-400 hover:text-pink-500 transition"
              >
                {{ item.content.text }}
              </component>
            </li>
          </ul>
        </address>
      </div>

      <section
        class="bg-gray-800 rounded-xl p-8 mb-12"
        aria-labelledby="newsletter-heading"
      >
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="mb-6 lg:mb-0 lg:mr-8">
            <h3 id="newsletter-heading" class="text-xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p class="text-gray-400">
              Get updates on special offers and beauty tips
            </p>
          </div>
          <form
            class="flex flex-col sm:flex-row w-full lg:w-auto"
            aria-label="Newsletter subscription form"
          >
            <label for="newsletter-email" class="sr-only"
              >Your email address</label
            >
            <input
              type="email"
              id="newsletter-email"
              placeholder="Ypur email address"
              class="px-6 py-3 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 mb-3 sm:mb-0 sm:mr-4 w-full"
              required
            />

            <button
              type="submit"
              class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg whitespace-nowrap"
              aria-label="Submit contact form"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer
        class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-500 text-sm mb-4 md:mb-0">
          &copy;{{ currentYear }} Glamour Clinic.All rights reserved
        </p>
        <nav aria-label="Legal links">
          <ul class="flex space-x-6">
            <li v-for="(link, index) in legalLinks" :key="index">
              <a
                :href="link.href"
                class="text-gray-500 hover:text-pink-500 text-sm transition"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  </footer>
</template>
<script setup>
import { computed, ref } from "vue";
const currentYear = computed(() => new Date().getFullYear());
const socialLinks = ref([
  { icon: "fa-brands:facebook-f", label: "Facebook" },
  { icon: "fa-brands:twitter", label: "Twitter" },
  { icon: "fa-brands:instagram", label: "Instagram" },
  { icon: "fa-brands:linkedin-in", label: "Linkedin" },
  { icon: "fa-brands:youtube", label: "Youtube" },
]);

const quickLinks = ref([
  { text: "Home", href: "#" },
  { text: "About Us", href: "#about" },
  { text: "Our Services", href: "#services" },
  { text: "Our Specialists", href: "#specialists" },
  { text: "Contact Us", href: "#contact" },
  { text: "Book Appointment", href: "#appointment" },
]);

const contactInfo = ref([
  {
    icon: "material-symbols:location-on",
    content: {
      type: "a",
      props: {
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      text: "123 Beauty Avenue",
    },
  },
  {
    icon: "material-symbols:phone-alt",
    content: {
      type: "a",
      props: {
        href: "#",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      text: "123 Beauty Avenue",
    },
  },
  {
    icon: "material-symbols:email",
    content: {
      type: "a",
      props: {
        href: "mailto:info@gmail.com",
      },
      text: ":info@gmail.com",
    },
  },
  {
    icon: "fa-solid:clock",
    content: {
      type: "span",
      props: {},
      text: "Sunday",
    },
  },
]);

const legalLinks = ref([
  { text: "Privacy Policy", href: "#" },
  { text: "Terms of Service", href: "#" },
  { text: "Sitemap", href: "#" },
]);
</script>
