<script setup>
import { ref } from 'vue';
import ContactModal from '@/components/ContactModal.vue'

const showModal = ref(false)
const openModal = () => (showModal.value = true)
const closeModal = () => (showModal.value = false)

const services = ref({
  'Academic Projects': [
    'MATLAB Projects (EEE/ECE/CSE)',
    'Digital Image Processing',
    'Machine Learning & Data Science',
    'IoT System Design',
    'Mechanical (CAD/CAM/CAE)',
    'Civil Engineering Solutions'
  ],
  'Professional Development': [
    'Enterprise Software Development',
    'Cloud Architecture (AWS/Azure/GCP)',
    'Cybersecurity Solutions',
    'DevOps & CI/CD Pipelines',
    'Big Data Analytics',
    'Blockchain Integration'
  ],
  'Emerging Technologies': [
    'AI/ML Implementation',
    'Computer Vision Systems',
    'AR/VR Development',
    'Smart City Solutions',
    'Robotic Process Automation',
    '5G Network Applications'
  ]
});

const features = ref([
  {
    title: 'Full-Cycle Development',
    description: 'From concept to deployment, we handle every stage of software development',
    icon: 'fa-rocket'
  },
  {
    title: 'Industry Best Practices',
    description: 'CI/CD, TDD, and Agile methodologies for robust solutions',
    icon: 'fa-trophy'
  },
  {
    title: 'Multi-Domain Expertise',
    description: 'Cross-industry solutions for engineering, healthcare, finance, and more',
    icon: 'fa-globe'
  },
  {
    title: 'Future-Ready Tech',
    description: 'Implementing cutting-edge technologies with scalability in mind',
    icon: 'fa-wand-magic-sparkles'
  }
]);


const processSteps = ref([
  { title: 'Consultation', description: 'Needs assessment & planning' },
  { title: 'Prototyping', description: 'Wireframing & architecture design' },
  { title: 'Development', description: 'Agile implementation cycle' },
  { title: 'Deployment', description: 'Production rollout & support' }
]);

const technologies = ref([
  'Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes', 'React',
  'Node.js', 'Java', 'C#', 'Azure', 'SolidWorks', 'AutoCAD', 'PHP', 'Vue.js'
]);
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#2F496E] py-16 px-6 lg:px-20">
    <!-- Hero Section -->
    <header class="text-center mb-16 space-y-6">
      <h1 class="text-5xl md:text-6xl font-bold text-[#2F496E] leading-tight">
        A-Z Software Solutions &<br>IT Innovation Guidance
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
        Comprehensive technology solutions spanning academic projects to enterprise systems, 
        powered by industry-best practices and cutting-edge innovation.
      </p>
    </header>

    <!-- Services Matrix -->
    <section class="mb-24 space-y-16">
      <div v-for="(categoryServices, categoryName) in services" :key="categoryName"
           class="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <h2 class="text-3xl font-bold text-[#2F496E] mb-8">{{ categoryName }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(service, index) in categoryServices" :key="index"
               class="group p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl 
                      border border-blue-100 hover:border-blue-300 transition-all">
            <h3 class="text-xl font-semibold mb-3 text-[#2F496E]">{{ service }}</h3>
            <p class="text-gray-600">Custom implementation with full documentation and deployment support</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="bg-gradient-to-r from-[#2F496E] to-blue-300 rounded-3xl p-12 mb-24 shadow-2xl">
      <h2 class="text-4xl font-bold text-center mb-12 text-slate-100">Strategic IT Advantage</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 bg-white/40 rounded-full flex items-center justify-center">
            <i :class="`fas ${feature.icon} text-2xl text-[#1d3b66]`"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-slate-300">{{ feature.title }}</h3>
          <p class="text-lg text-slate-300">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Modal -->
    <ContactModal v-if="showModal" @close="closeModal" />

    <!-- Tech Stack -->
    <section class="mb-24">
      <h2 class="text-4xl font-bold text-[#2F496E] text-center mb-12">Our Technology Ecosystem</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <div v-for="(tech, index) in technologies" :key="index"
             class="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
          <span class="text-lg font-medium text-gray-700">{{ tech }}</span>
        </div>
      </div>
    </section>

    <!-- Career Accelerator -->
    <section class="bg-white rounded-3xl p-12 mb-24 shadow-2xl">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold text-[#2F496E] mb-6">Career Catalyst Program</h2>
          <ul class="space-y-4 text-lg">
            <li class="flex items-center space-x-3">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>ATS-optimized CV crafting</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>GitHub Portfolio Development</span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Technical Interview Preparation</span>
            </li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-[#2F496E] to-blue-400 rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Included with Every Project:</h3>
          <ul class="space-y-3">
            <li>✔ Complete Documentation package</li>
            <li>✔ 1-year maintenance support</li>
            <li>✔ Deployment Assistance</li>
            <li>✔ Project Explainer video</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="text-center bg-[#2F496E] rounded-3xl p-12 shadow-2xl">
      <h2 class="text-4xl font-bold text-white mb-6">Start Your Digital Transformation</h2>
      <p class="text-xl text-white/90 mb-8">Schedule a call with our solutions architects</p>
      <button @click="openModal" 
              class="bg-white text-[#2F496E] px-8 py-4 rounded-xl text-lg font-semibold
                     hover:bg-blue-50 transition-colors shadow-lg">
        Connect with us →
      </button>
    </section>

    <footer class="mt-24 text-center text-white/80">
      <p>© 2025 Acadtrix. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .grid {
    gap: 1rem;
  }
  
  section {
    padding: 2rem 1rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .grid {
    gap: 1.5rem;
  }
  
  section {
    padding: 3rem 2rem;
  }
}
</style>