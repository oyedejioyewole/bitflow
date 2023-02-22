export default defineNuxtConfig({
  modules: ["@nuxtjs/robots", "@nuxt/image-edge", "nuxt-fonty"],
  app: {
    head: {
      title: "Bitflow",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Impossibility is just an understatement",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "google-site-verification",
          content:
            process.env.NODE_ENV === "production"
              ? process.env.GOOGLE_SITE_VERIFICATION_TOKEN
              : "",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://bitflow.vercel.app/" },
        { property: "og:title", content: "Bitflow" },
        {
          property: "og:description",
          content: "Impossibility is just an understatement",
        },
        { property: "og:image", content: "/seo-preview.webp" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://bitflow.vercel.app" },
        { property: "twitter:title", content: "Bitflow" },
        {
          property: "twitter:description",
          content: "Impossibility is just an understatement",
        },
        { property: "twitter:image", content: "/seo-preview.webp" },
      ],
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      script: [
        { src: "/js/jquery-3.5.1.min.js", body: true, defer: true },
        { src: "/js/popper/popper.min.js", body: true, defer: true },
        { src: "/js/tether/tether.min.js", body: true, defer: true },
        { src: "/js/bootstrap/js/bootstrap.min.js", body: true, defer: true },
        { src: "/js/smoothscroll/smooth-scroll.js", body: true, defer: true },
        {
          src: "/js/viewportchecker/jquery.viewportchecker.js",
          body: true,
          defer: true,
        },
        { src: "/js/dropdown/js/nav-dropdown.js", body: true, defer: true },
        { src: "/js/dropdown/js/navbar-dropdown.js", body: true, defer: true },
        {
          src: "/js/touchswipe/jquery.touch-swipe.min.js",
          body: true,
          defer: true,
        },
        { src: "/js/parallax/jarallax.min.js", body: true, defer: true },
        { src: "/js/formstyler/jquery.formstyler.js", body: true, defer: true },
        {
          src: "/js/formstyler/jquery.formstyler.min.js",
          body: true,
          defer: true,
        },
        { src: "/js/theme/js/script.js", body: true, defer: true },
      ],
    },
  },
  robots: {
    rules: {
      UserAgent: "*",
      Disallow: "/js",
    },
  },
  css: [
    "~/assets/css/fontawesome.min.css",
    "~/assets/font-awesome-brands/css/brands.min.css",
    "~/assets/themify/css/themify-icons.min.css",
    "~/assets/tether/tether.min.css",
    "~/assets/bootstrap/css/bootstrap.min.css",
    "~/assets/bootstrap/css/bootstrap-grid.min.css",
    "~/assets/bootstrap/css/bootstrap-reboot.min.css",
    "~/assets/animatecss/animate.min.css",
    "~/assets/dropdown/css/style.min.css",
    "~/assets/formstyler/jquery.formstyler.min.css",
    "~/assets/formstyler/jquery.formstyler.theme.min.css",
    "~/assets/socicon/css/styles.min.css",
    "~/assets/theme/css/style.min.css",
    "~/assets/mobirise/css/mbr-additional.min.css",
    "~/assets/web/assets/mobirise-icons2/mobirise2.min.css",
  ],
  fonty: {
    autoImport: true,
  },
});
