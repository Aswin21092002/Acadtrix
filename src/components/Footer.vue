<script setup>

</script>

<template>
    <footer class="bg-[#2F496E] text-white mt-auto">
            <div class="container mx-auto px-4 py-8">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <!-- About Section -->
                    <div class="lg:col-span-2">
                        <h3 class="text-xl font-bold mb-4 pb-2">About Us</h3>
                        <p class="text-white/90 text-sm leading-relaxed">
                            We empower students and professionals to transform academic projects into real-world
                            solutions
                            through expert mentorship. Bridging the gap between academia and industry with innovative
                            approaches and hands-on guidance.
                        </p>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="text-xl font-bold mb-4  pb-2">Quick Links</h3>
                        <ul class="space-y-3">
                            <li>
                                <a href="/" class="flex items-center gap-3 hover:text-blue-300 transition-all group">
                                    <i class="fas fa-home text-blue-300 group-hover:scale-110 transition-transform"></i>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/services"
                                    class="flex items-center gap-3 hover:text-blue-300 transition-all group">
                                    <i class="fas fa-cogs text-blue-300 group-hover:scale-110 transition-transform"></i>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/teams"
                                    class="flex items-center gap-3 hover:text-blue-300 transition-all group">
                                    <i
                                        class="fas fa-users text-blue-300 group-hover:scale-110 transition-transform"></i>
                                    Teams
                                </a>
                            </li>
                            <li>
                                <a href="/connect"
                                    class="flex items-center gap-3 hover:text-blue-300 transition-all group">
                                    <i
                                        class="fas fa-envelope text-blue-300 group-hover:scale-110 transition-transform"></i>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Contact Information -->
                    <div>
                        <h3 class="text-xl font-bold mb-4 pb-2">Connect With Us</h3>
                        <div class="space-y-3 text-sm">
                            <div class="flex items-center gap-3 hover:text-blue-300 transition-colors">
                                <i class="fas fa-envelope text-blue-300"></i>
                                <a href="mailto:acadtrixx@gmail.com" class="hover:underline">acadtrixx@gmail.com</a>
                            </div>
                            <div class="flex items-center gap-3 hover:text-blue-300 transition-colors">
                                <i class="fas fa-phone text-blue-300"></i>
                                <a href="tel:+916383854104" class="hover:underline">+91 6383854104</a>
                            </div>
                            <div class="flex items-center gap-3 hover:text-blue-300 transition-colors">
                                <i class="fab fa-instagram text-blue-300"></i>
                                <a href="https://www.instagram.com/acad_trix" target="_blank"
                                    class="hover:underline">Acadtrix</a>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="border-t border-white/10 mt-8 pt-6 text-center">
                    <p class="text-sm text-white/80">
                        &copy; 2025 Acadtrix. All rights reserved.
                        <span class="block sm:inline mt-2 sm:mt-0">Crafted with <i
                                class="fas fa-heart text-red-400"></i> for innovation</span>
                    </p>
                </div>
            </div>
        </footer>
</template>