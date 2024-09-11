<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
      <a href="#">
        <img class=" h-14" src="@/assets/logo.png" alt="">
      </a>

      <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
        <a href="https://www.linkedin.com/in/rafaelontra/" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
          Linkedin
        </a>

        <a href="https://www.facebook.com/rafael.lontra" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
          Facebook
        </a>

        <a href="https://twitter.com/lontrex" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
          Twitter
        </a>
        <a href="https://www.instagram.com/lontrarafael" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
          Instagram
        </a>
      </div>

      <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2024. </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>