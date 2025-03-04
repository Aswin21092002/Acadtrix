<script setup>
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'

const teamMembers = ref([
    {
        id: 1,
        name: 'Amsha J',
        role: 'Full Stack Developer',
        image: 'amsha.jpg',
        linkedin: 'https://www.linkedin.com/in/amsha-jeyachandran-31a13620a',
        description: 'Developing and maintaining both front-end and back-end solutions with expertise in full-stack technologies.'
    },
    {
        id: 2,
        name: 'Anisha A V',
        role: 'Packaged App Development Associate',
        image: 'anisha_a.jpg',
        linkedin: 'https://www.linkedin.com/in/anisha-a-v-a70b61219',
        description: 'Focused on delivering robust packaged applications with a modern frameworks.'
    },
    {
        id: 3,
        name: 'Sowndarya C U',
        role: 'Technical Support',
        image: 'sow.JPG',
        linkedin: 'https://www.linkedin.com/in/sowndarya-c-u-20002',
        description: 'Providing expert technical assistance and solving complex issues, ensuring smooth product deployment and usage.'
    },
    {
        id: 4,
        name: 'Prabha K',
        role: 'DevOps Engineer',
        image: 'prabha.jpg',
        linkedin: 'https://www.linkedin.com/in/lakshmi-prabha-k-251679191',
        description: 'Expert in automating and optimizing cloud infrastructure, CI/CD pipelines, and enabling continuous delivery in production.'
    },
    {
        id: 5,
        name: 'Janet Marteena',
        role: 'Software Tester',
        image: 'janet.jpg',
        linkedin: 'https://www.linkedin.com/in/janet-marteena-j-0a4a6220a',
        description: 'Ensuring the highest quality software by performing rigorous testing, identifying bugs, and ensuring functionality.'
    },
    {
        id: 6,
        name: 'Harshini R U',
        role: 'Graphic Designer',
        image: 'harshini.jpeg',
        linkedin: 'https://www.linkedin.com/in/harshini124',
        description: 'Designing visually appealing and user-friendly graphics, logos, and interfaces to enhance user experiences.'
    }
])

</script>

<template>
    <div class="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
        <Transition name="fade" appear>
            <div class="max-w-7xl mx-auto">
                <!-- Header Section -->
                <div class="text-center mb-16">
                    <h1 class="text-4xl font-bold text-[#2F496E] mb-4 animate-slide-in-down">
                        Our Expert Team
                    </h1>
                    <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                        Guiding graduates through every step of their academic journey with technical expertise and
                        mentorship.
                        From concept to deployment, we provide comprehensive support for your academic projects.
                    </p>
                </div>

                <!-- Team Grid -->
                <TransitionGroup name="staggered-fade" tag="div"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="member in teamMembers" :key="member.id"
                        class="relative transform transition-all duration-300 hover:scale-105">
                        <div
                            class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                            <!-- Team Member Image -->
                            <div class="relative h-64 overflow-hidden">
                                <img :src="`/Acadtrix/teams/${member.image}`" :alt="member.name"
                                    class="w-full h-full object-cover transition-transform duration-500">
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-[#2F496E] opacity-90 flex items-end p-4">
                                    <p class="text-white text-sm">{{ member.description }}</p>
                                </div>
                            </div>


                            <!-- Team Member Info -->
                            <div class="p-6 bg-white">
                                <h3 class="text-xl font-bold text-gray-800 mb-2">{{ member.name }}</h3>
                                <p class="text-[#2F496E] font-medium mb-4">{{ member.role }}</p>
                                <a :href="member.linkedin" target="_blank"
                                    class="inline-flex items-center text-[#2F496E] hover:text-[#1a2f4b] transition-colors">
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </TransitionGroup>
            </div>
        </Transition>
    </div>
    <Footer></Footer>
</template>



<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.staggered-fade-move,
.staggered-fade-enter-active,
.staggered-fade-leave-active {
    transition: all 0.5s ease;
}

.staggered-fade-enter-from,
.staggered-fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.staggered-fade-leave-active {
    position: absolute;
}

@keyframes slide-in-down {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-slide-in-down {
    animation: slide-in-down 0.5s ease-out;
}
</style>