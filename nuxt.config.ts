// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@telekom/scale-components/dist/scale-components/scale-components.css"],
  build: {
    transpile: ["@telekom/scale-components"],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("scale-"),
    },
  },
  compatibilityDate: "2025-07-03",
});
