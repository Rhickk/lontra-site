<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
      <a href="/">
        <img class=" h-14" src="@/assets/logo.png" alt="">
      </a>

      <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
        <a target="_blank" href="https://www.linkedin.com/in/rafaelontra/" class="text-sm text-gray-300 transition-colors duration-300 ">
          Linkedin
        </a>

        <a target="_blank" href="https://www.facebook.com/rafael.lontra" class="text-sm text-gray-300 transition-colors duration-300 ">
          Facebook
        </a>

        <a target="_blank" href="https://twitter.com/lontrex" class="text-sm text-gray-300 transition-colors duration-300 ">
          Twitter
        </a>
        <a target="_blank" href="https://www.instagram.com/lontrarafael" class="text-sm text-gray-300 transition-colors duration-300 ">
          Instagram
        </a>
        <a target="_blank" href="/privacypolicy" class="text-sm text-gray-300 transition-colors duration-300">Privacy Policy</a>
        <a target="_blank" href="/csrpolicy" class="text-sm text-gray-300 transition-colors duration-300">Corporate Social Responsibility Policy</a>
      </div>

      <p class="mt-6 text-sm text-gray-500 lg:mt-0">© Copyright 2024. </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>