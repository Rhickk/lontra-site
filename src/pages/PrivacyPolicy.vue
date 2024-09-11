<template>

  <header class="">
    <div class="flex justify-center items-center">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img class="h-24 w-auto" src="@/assets/logo.png" alt="" />
      </a>
    </div>
  </header>

  <div class="privacy-policy max-w-4xl mx-auto p-6 bg-white rounded-lg">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

    <p class="text-lg text-gray-600 mb-2"><strong>Myth Jeux</strong></p>
    <p class="text-gray-600 mb-6">Effective Date: 09/09/2024</p>

    <p class="text-gray-700 mb-6">
      At Myth Jeux, we are committed to protecting your privacy. This Privacy Policy outlines our practices
      regarding the collection, use, and protection of your information.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Information We Do Not Collect</h2>
    <p class="text-gray-700 mb-6">
      Myth Jeux does not collect any personal data from users. We respect your privacy and ensure that no personal
      information is captured or stored by our products.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Third-Party Platforms</h2>
    <p class="text-gray-700 mb-6">
      All our products are available through third-party platforms such as console stores, Steam, and other
      reputable platforms. These platforms adhere to the strictest standards regarding data protection and privacy.
      We encourage you to review the privacy policies of these platforms to understand how your data is managed.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
    <p class="text-gray-700 mb-6">
      While we do not collect personal data, we are committed to ensuring that any interactions you have with our
      products are secure. We work with trusted platforms that implement robust security measures to protect your
      information.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">User Rights</h2>
    <p class="text-gray-700 mb-6">
      Since we do not collect any personal data, there are no user data rights to exercise in relation to Myth Jeux.
      However, you may have rights under the privacy policies of the third-party platforms where our products are
      available.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
    <p class="text-gray-700 mb-6">
      We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
      effective date. We encourage you to review this policy periodically to stay informed about how we are protecting
      your privacy.
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
    <p class="text-gray-700 mb-2">
      If you have any questions or concerns about this Privacy Policy, please contact us at:
    </p>
    <p class="text-lg text-gray-600"><strong>Myth Jeux</strong></p>
    <p class="text-gray-600">Rafael "Lontra" Teixeira</p>
    <p class="text-gray-600">contato@mitogames.com.br</p>
  </div>

  <div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "PrivacyPolicy",
  components: {
    Footer,
  },
};
</script>

<style scoped>
</style>
