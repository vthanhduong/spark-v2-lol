// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/mdc",
    "@nuxthub/core",
    "nuxt-auth-utils",
    "nuxt-charts",
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400&family=Geo:wght@400&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  mdc: {
    headings: {
      anchorLinks: false,
    },
    highlight: {
      // noApiRoute: true
      shikiEngine: "javascript",
    },
  },

  runtimeConfig: {
    sessionPassword: "",
    oauth: {
      github: {
        clientId: "",
        clientSecret: "",
      },
    },
    aiGatewayApiKey: "",
    databaseUrl: "",
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: "2024-07-11",

  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  hub: {
    db: "postgresql",
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
