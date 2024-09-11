<template>

  <header class="">
    <div class="flex justify-center items-center">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img class="h-24 w-auto" src="@/assets/logo.png" alt="" />
      </a>
    </div>
  </header>

  <div class="csr-policy max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">Corporate Social Responsibility (CSR) Policy</h1>

    <p class="text-lg text-gray-600 mb-2"><strong>Myth Jeux</strong></p>

    <p class="text-gray-700 mb-6">
      At Myth Jeux, we are committed to creating a positive impact on society and the environment through our
      business practices. As a leading game development and gamification services company, we believe in the
      power of innovation and responsibility to drive sustainable growth and contribute to the well-being of
      our community.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Diversity and Inclusion</h2>
    <p class="text-gray-700 mb-6">
      We celebrate diversity and foster an inclusive environment where everyone is respected and valued. Our
      team is composed of individuals from various backgrounds, and we are committed to providing equal
      opportunities for all employees, regardless of race, gender, age, religion, or disability.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Environmental Sustainability</h2>
    <p class="text-gray-700 mb-6">
      We are dedicated to minimizing our environmental footprint through sustainable practices:
    </p>
    <ul class="list-disc list-inside text-gray-700 mb-6">
      <li>Long Equipment Life: We ensure the longevity of our equipment by maintaining and upgrading it regularly, reducing electronic waste.</li>
      <li>Reduced Commutes: We promote remote work and flexible schedules to minimize unnecessary commutes, thereby reducing our carbon footprint.</li>
      <li>Optimized Code: Our development practices focus on creating optimized code that requires less energy to run, contributing to energy efficiency.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Data Privacy and Security</h2>
    <p class="text-gray-700 mb-6">
      Respecting our users' data and privacy is paramount. We implement robust security measures to protect user information and comply with all relevant data protection regulations. Transparency and trust are the cornerstones of our relationship with our users.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Innovation and Strategic Development</h2>
    <p class="text-gray-700 mb-6">
      As part of the 5 domains of Strategic Innovation from Wallonia, we are committed to:
    </p>
    <ul class="list-disc list-inside text-gray-700 mb-6">
      <li>Innovative Conception and Production Modes: Applying modern agile methodologies and the double diamond strategy for game development and conception.</li>
      <li>User Experience and Accessibility: Offering gamified solutions that prioritize user experience and accessibility, ensuring our products are enjoyable and usable by everyone.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Community Engagement</h2>
    <p class="text-gray-700 mb-6">
      We believe in giving back to the community. Myth Jeux actively participates in local initiatives and supports various social causes. We encourage our employees to volunteer and contribute to the betterment of society.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Ethical Business Practices</h2>
    <p class="text-gray-700 mb-6">
      Integrity and ethics are at the heart of our business operations. We adhere to the highest standards of ethical conduct in all our dealings with clients, partners, and stakeholders.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
    <p class="text-gray-700 mb-6">
      At Myth Jeux, our commitment to corporate social responsibility is integral to our mission and values. We strive to make a positive impact through our actions and inspire others to join us in creating a better, more sustainable world.
    </p>
  </div>

  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "CSRPolicy",
  components: {
    Footer,
  },
};
</script>

<style scoped>
</style>
