<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser';

// Emits the close event to the parent component
const emit = defineEmits(['close'])

const form = ref({
    name: '',
    email: '',
    message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
    isSubmitting.value = true
    try {
        await emailjs.send(
            'service_psg2uf6',
            'template_6mvpt4s',
            {
                to_name: 'AcadTrix Team',
                from_name: form.value.name,
                message: form.value.message,
                email: form.value.email,
            },
            'Y2BDeNoJkjt2B8vbe'
        )

        showSuccess.value = true
        form.value = { name: '', email: '', message: '' }

        // Auto-close the modal after 2 seconds
        setTimeout(() => emit('close'), 2000)
    } catch (error) {
        console.error('Email failed to send:', error)
    }
    isSubmitting.value = false
}
</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full relative">
            <!-- Logo Section -->
            <img src="/logos/acadtrix-blue-logo.png" alt="AcadTrix Logo" class="h-12 mx-auto mb-6" />

            <!-- Contact Form -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                    <label class="block mb-2 font-semibold">Name</label>
                    <input v-model="form.name" type="text" required class="input" />
                </div>

                <div>
                    <label class="block mb-2 font-semibold">Email</label>
                    <input v-model="form.email" type="email" required class="input" />
                </div>

                <div>
                    <label class="block mb-2 font-semibold">Message</label>
                    <textarea v-model="form.message" rows="4" required class="input"></textarea>
                </div>

                <button type="submit" :disabled="isSubmitting" class="btn">
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
            </form>

            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-4 p-4 bg-white text-[#2F496E] rounded-lg text-center animate-fade-in">
                Thanks for contacting us, We'll get in touch with you shortly!
            </div>

            <!-- Close Button (Cross Icon) -->
            <button @click="emit('close')" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl">
                &times;
            </button>
        </div>
    </div>
</template>

<style scoped>
.input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: border 0.2s ease;
}

.input:focus {
    border-color: #2F496E;
}

.btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(to right, #2F496E, #4A90E2);
    color: white;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;
}

.btn:disabled {
    background: #94a3b8;
    cursor: not-allowed;
}

.btn:hover {
    transform: scale(1.05);
}
</style>
