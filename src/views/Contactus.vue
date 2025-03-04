<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import emailjs from '@emailjs/browser';
import Footer from '@/components/Footer.vue'
const form = ref({
    name: '',
    email: '',
    message: ''
})

const contactInfo = [
    {
        icon: 'fa-envelope',
        title: 'Email',
        value: 'acadtrixx@gmail.com',
        link: 'mailto:acadtrixx@gmail.com'
    },
    {
        icon: 'fa-phone',
        title: 'Phone',
        value: '+91 6383854104',
        link: 'tel:+916383854104'
    },
    {
        icon: 'fa-brands fa-instagram',
        title: 'Instagram',
        value: '@acad_trix',
        link: 'https://www.instagram.com/acad_trix?igsh=NzdtMHNhY2ptNG9x'
    }
]

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
    isSubmitting.value = true

    try {
        await emailjs.send(
            'service_psg2uf6',
            'template_6mvpt4s',
            {
                to_name: 'Acad Trix Team',
                from_name: form.value.name,
                message: form.value.message,
                email: form.value.email,
            },
            'Y2BDeNoJkjt2B8vbe'
        )

        showSuccess.value = true
        form.value = { name: '', email: '', message: '' }

    } catch (error) {
        console.error('Email failed to send:', error)
    }

    isSubmitting.value = false
}


const beforeEnter = (el) => {
    el.style.opacity = 0
    el.style.transform = 'translateY(30px)'
}

const enter = (el) => {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: parseFloat(el.style.getPropertyValue('--delay') || '0'),
        ease: 'power3.out'
    })
}
</script>

<template>
    <main class="min-h-screen bg-gradient-to-br from-[#FFFaff] to-[#2F496E] py-16 px-6 lg:px-20">
        <div class="max-w-7xl mx-auto">
            <!-- Header Section -->
            <transition appear @before-enter="beforeEnter" @enter="enter">
                <div class="text-center mb-16">
                    <h1 class="text-5xl font-bold text-[#2F496E] mb-4">Get in Touch</h1>
                    <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                        Have questions about our services? Ready to start your project? We're here to help you succeed.
                    </p>
                </div>
            </transition>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <transition appear @before-enter="beforeEnter" @enter="enter" :style="{ '--delay': '0.2s' }">
                    <div class="bg-white rounded-2xl shadow-xl p-8">
                        <h2 class="text-2xl font-bold text-[#2F496E] mb-6">Send us a Message</h2>
                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <div>
                                <label class="block text-gray-700 mb-2">Name</label>
                                <input v-model="form.name" type="text" required
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F496E] focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-gray-700 mb-2">Email</label>
                                <input v-model="form.email" type="email" required
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F496E] focus:border-transparent">
                            </div>
                            
                            <div>
                                <label class="block text-gray-700 mb-2">Message</label>
                                <textarea v-model="form.message" required rows="4"
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F496E] focus:border-transparent"></textarea>
                            </div>
                            <button type="submit"
                                class="w-full bg-gradient-to-r from-[#2F496E] to-blue-200 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                                :disabled="isSubmitting">
                                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                            </button>
                        </form>
                        <div v-if="showSuccess"
                            class="mt-4 p-4 bg-white text-[#2F496E] rounded-lg text-center animate-fade-in">
                            Thanks for contacting us, We'll get in touch with you shortly!
                        </div>
                    </div>
                </transition>

                <!-- Contact Information -->
                <transition appear @before-enter="beforeEnter" @enter="enter" :style="{ '--delay': '0.4s' }">
                    <div class="space-y-8">
                        <div v-for="(info, index) in contactInfo" :key="index"
                            class="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                            <div class="flex items-center space-x-4">
                                <div
                                    class="w-12 h-12 bg-gradient-to-r from-[#2F496E] to-blue-200 rounded-full flex items-center justify-center">
                                    <i :class="`fas ${info.icon} text-xl text-white`"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-[#2F496E]">{{ info.title }}</h3>
                                    <a :href="info.link" target="_blank"
                                        class="text-gray-600 hover:text-[#2F496E] transition-colors">
                                        {{ info.value }}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </transition>
            </div>
        </div>
        
    </main>
    <Footer></Footer>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>