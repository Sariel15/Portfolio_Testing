import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-10-17",

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    apiSecret: "",

    public: {
      githubUsername: "",
      fullname: "",
    },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  ssr: true,

  nitro: {
    preset: "cloudflare-pages",
  },
});
