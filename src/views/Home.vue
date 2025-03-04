<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import ContactModal from '@/components/ContactModal.vue'
import Footer from '@/components/Footer.vue'

const showModal = ref(false)
const openModal = () => (showModal.value = true)
const closeModal = () => (showModal.value = false)

const services = [
    {
        title: 'IEEE Projects',
        icon: 'fa-project-diagram',
        description: 'Industry-standard IEEE projects with complete documentation, implementation support, and publication guidance. Get hands-on experience with cutting-edge technologies.',
    },
    {
        title: 'Machine Learning & AI',
        icon: 'fa-brain',
        description: 'End-to-end ML/AI projects from data preprocessing to deployment. Learn popular frameworks like TensorFlow, PyTorch, and implement real-world solutions.',
    },
    {
        title: 'Full Stack Development',
        icon: 'fa-layer-group',
        description: 'Build modern web applications using React, Vue, Angular with backend technologies. Master microservices, APIs, and database design.',
    },
    {
        title: 'Data Science & Analytics',
        icon: 'fa-chart-line',
        description: 'Comprehensive data analysis projects using Python, R, and visualization tools. Learn big data technologies and predictive modeling.',
    },
    {
        title: 'Research & Publication',
        icon: 'fa-book-reader',
        description: 'Expert guidance for thesis writing, research methodology, and paper publication in renowned journals. Get complete plagiarism-free content.',
    },
    {
        title: 'Cloud & DevOps',
        icon: 'fa-cloud',
        description: 'Deploy projects on AWS/Azure/GCP. Learn containerization, CI/CD pipelines, and modern deployment practices.',
    },
]

const features = [
    {
        title: '1-on-1 Mentorship',
        description: 'Get personalized guidance from industry experts with years of experience',
        icon: 'fa-users'
    },
    {
        title: 'Hands-on Learning',
        description: 'Practice with real-world projects and industry-standard tools',
        icon: 'fa-laptop-code'
    },
    {
        title: 'Career Guidance',
        description: 'Get insights into IT career paths and interview preparation',
        icon: 'fa-road'
    },
    {
        title: 'Lifetime Access',
        description: 'Access to project resources, documentation, and future updates',
        icon: 'fa-infinity'
    }
]

const stats = ref([
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Success Rate' },
    { value: '200+', label: 'Expert Mentors' },
    { value: '24/7', label: 'Support' }
])

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
    <main class="min-h-screen bg-gradient-to-br from-[#FFFaff] to-[#2F496E]">
        <!-- Hero Section -->
        <div class="container mx-auto px-6 pt-24 pb-16">
            <div class="max-w-4xl">
                <transition appear @before-enter="beforeEnter" @enter="enter">
                    <h1
                        class="text-5xl font-bold mb-6 leading-tight md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#2F496E] to-[#2F496E]">
                        Transform Your Academic Projects into Industry Ready Solutions
                    </h1>
                </transition>

                <transition appear @before-enter="beforeEnter" @enter="enter" :style="{ '--delay': '0.2s' }">
                    <h2 class="text-2xl mb-8 text-gray-700 md:text-3xl">
                        Your Bridge to Professional Excellence in Technology
                    </h2>
                </transition>

                <transition appear @before-enter="beforeEnter" @enter="enter" :style="{ '--delay': '0.4s' }">
                    <div class="space-y-4 mb-12 text-gray-600 text-lg">
                        <p>We don't just help with projects – we transform graduates into industry-ready professionals.
                            Get comprehensive guidance from concept to deployment, with a focus on practical learning
                            and industry best practices.</p>
                        <p class="text-gray-600 space-x-2 flex flex-row">
                            <span class="flex items-center">
                                <i
                                    class="fas fa-rocket text-2xl bg-gradient-to-r from-[#2F496E] to-blue-400 text-transparent bg-clip-text"></i>
                                Live Mentoring Sessions
                            </span>
                            <span class="flex items-center">
                                <i
                                    class="fas fa-lightbulb text-2xl bg-gradient-to-r from-[#2F496E] to-blue-400 text-transparent bg-clip-text"></i>
                                Industry Standard Practices
                            </span>
                            <span class="flex items-center">
                                <i
                                    class="fas fa-book text-2xl bg-gradient-to-r from-[#2F496E] to-blue-400 text-transparent bg-clip-text"></i>
                                Complete Documentation
                            </span>
                            <span class="flex items-center">
                                <i
                                    class="fas fa-bullseye text-2xl bg-gradient-to-r from-[#2F496E] to-blue-400 text-transparent bg-clip-text"></i>
                                Career Guidance
                            </span>
                        </p>
                    </div>
                </transition>


                <transition appear @before-enter="beforeEnter" @enter="enter" :style="{ '--delay': '0.6s' }">
                    <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 mb-16">
                        <button @click="openModal"
                            class="bg-gradient-to-r from-[#2F496E] to-blue-300 text-white px-8 py-4 rounded-lg transition-all hover:shadow-xl transform hover:scale-105">
                            Start Your Journey
                        </button>

                    </div>
                </transition>
                <ContactModal v-if="showModal" @close="closeModal" />
            </div>
        </div>

        <!-- Services Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold mb-16 text-center text-[#2F496E]">Comprehensive Project Solutions</h2>
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <transition-group appear @before-enter="beforeEnter" @enter="enter">
                        <div v-for="(service, index) in services" :key="service.title"
                            class="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            :style="{ '--delay': `${0.2 + index * 0.1}s` }">
                            <div
                                class="w-14 h-14 mb-6 bg-gradient-to-br from-[#2F496E] to-blue-200 rounded-lg flex items-center justify-center">
                                <i :class="`fas ${service.icon} text-xl text-white`"></i>
                            </div>
                            <h3 class="text-2xl font-semibold mb-4 text-[#2F496E]">{{ service.title }}</h3>
                            <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
                        </div>
                    </transition-group>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20 bg-gradient-to-br from-[#2F496E] to-blue-200 text-white">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold mb-16 text-center">Why Choose Us?</h2>
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <transition-group appear @before-enter="beforeEnter" @enter="enter">
                        <div v-for="(feature, index) in features" :key="feature.title" class="text-center p-6"
                            :style="{ '--delay': `${0.2 + index * 0.1}s` }">
                            <div
                                class="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                                <i :class="`fas ${feature.icon} text-2xl`"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-4">{{ feature.title }}</h3>
                            <p class="text-white/80">{{ feature.description }}</p>
                        </div>
                    </transition-group>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-4xl font-bold mb-8 text-[#2F496E]">Ready to Start Your Project Journey?</h2>
                <p class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">Join hundreds of successful graduates who have
                    transformed their academic projects into industry-ready solutions. Get started today with our expert
                    guidance.</p>
                <button @click="openModal"
                    class="bg-gradient-to-r from-[#2F496E] to-blue-200 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl transform hover:scale-105">
                    Contact Us
                </button>
            </div>
        </section>
        
        <Footer></Footer>

    </main>
</template>

<style scoped>
.gradient-text {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
</style>

<style scoped>
.btn {
    padding: 12px 24px;
    background: linear-gradient(to right, #2F496E, #4A90E2);
    color: white;
    border-radius: 8px;
    font-weight: bold;
    transition: transform 0.2s;
}

.btn:hover {
    transform: scale(1.05);
}
</style>