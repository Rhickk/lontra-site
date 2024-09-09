<template>

  <section class="lg:flex lg:py-0 py-10 lg:items-center">
    <div class="lg:w-1/2 ">
      <p class="text-lg tracking-wider uppercase text-blue-400 ">Game</p>
      <h2 class="mt-2 text-2xl font-semibold pb-4 capitalize text-white">4 The Elements</h2>
      <a href="https://www.youtube.com/watch?v=JAGAr07qVcY" class="text-sm font-semibold leading-6 text-white">Assistir Trailer <span aria-hidden="true">→</span></a>
    </div>

    <div class="px-6">
      <div class="" id="xsolla-buy-button-widget2"></div>
    </div>

    <div class="mt-4 lg:w-1/2  lg:mt-0">
      <img class="object-cover  h-64 rounded-lg md:h-72"
           src="@/assets/game1.jpeg"
           alt="">
    </div>
  </section>
</template>


<script>
export default {
  name: 'TheElements',
  mounted() {
    const options = {
      project_id: "255461",
      sku: "4-the-elements",
      item_type: "unit",
      api_settings: {
        sandbox: false,
      },
      widget_ui: {
        target_element: "#xsolla-buy-button-widget2",
        button_text: "Buy Now",
        theme: {
          foreground: "green",
          background: "dark",
        },
      },
      payment_widget_ui: {
        lightbox: {
          height: '800px',
          spinner: 'round'
        }
      }
    };
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://cdn.xsolla.net/embed/buy-button/3.1.8/widget.min.js";
    script.addEventListener('load', function () {
      XBuyButtonWidget.create(options);
    });
    document.head.appendChild(script);
  },
};
</script>