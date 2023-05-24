// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icon"],
  plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
  app: {
    // pageTransition: { name: "page", mode: "default",  },
  },
  css: ["~/assets/css/main.css"],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
