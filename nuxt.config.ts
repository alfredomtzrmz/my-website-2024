// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    https: {
      key: './certificates/alfredom.test.dev-key.pem',
      cert: './certificates/alfredom.test.dev.pem',
    },
    host: 'alfredom.test.dev',
  },
  modules: ['@nuxt/ui'],
});
