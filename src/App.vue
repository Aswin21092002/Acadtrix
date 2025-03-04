<script setup>
import { ref, onMounted } from 'vue'
import ContactModal from '@/components/ContactModal.vue'

const showModal = ref(false)
const openModal = () => (showModal.value = true)
const closeModal = () => (showModal.value = false)

const links = ref([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/teams' },
  { name: 'Connect', path: '/connect' }
])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div class="relative">
    <nav :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    ]">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo Section -->
          <div class="flex items-center space-x-2">
            <router-link to="/" class="flex items-center">
              <img src="/logos/acadtrix-blue-logo.png" alt="Academic Project Support"
                class="w-40 transition-transform duration-300 hover:scale-105">
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link v-for="(link, index) in links" :key="index" :to="link.path"
              class="relative text-[#2F496E] font-medium text-lg hover:text-[#2F496E] transition-colors duration-300 group">
              {{ link.name }}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-[#2F496E] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </router-link>
            <button @click="openModal"
              class="bg-gradient-to-r from-[#2F496E] to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-[#2F496E] focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <transition enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-200 ease-in" leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0">
          <div v-if="isMobileMenuOpen"
            class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl">
            <div class="px-4 py-4 space-y-4">
              <router-link v-for="(link, index) in links" :key="index" :to="link.path"
                class="block text-[#2F496E] py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                @click="isMobileMenuOpen = false">
                {{ link.name }}
              </router-link>
              <button
                class="w-full bg-gradient-to-r from-[#2F496E] to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </transition>
      </div>
    </nav>
    <ContactModal v-if="showModal" @close="closeModal" />
    <!-- Spacer for fixed navigation -->
    <div class="h-20"></div>

    <!-- Router View -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #2F496E;
  font-weight: 600;
}

.router-link-active .absolute {
  transform: scaleX(1);
}
</style>