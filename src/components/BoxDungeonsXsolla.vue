<template>
  <div class="" id="xsolla-buy-button-widget"></div>
</template>

<script>
export default {
  name: 'BoxDungeons',
  mounted() {
    const options = {
      project_id: "255461",
      sku: "pop-some-eyes",
      item_type: "unit",
      api_settings: {
        sandbox: false,
      },
      widget_ui: {
        target_element: "#xsolla-buy-button-widget",
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