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
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/vueuse
    '@vueuse/nuxt',
    // https://nuxt.com/modules/image
    '@nuxt/image',
    // https://nuxt.com/modules/google-fonts
    '@nuxtjs/google-fonts',
    // https://nuxt.com/modules/pinia
    '@pinia/nuxt',
  ],
  ui: {
    icons: ['heroicons', 'ph', 'solar'],
  },
  colorMode: {
    classSuffix: '',
    storageKey: 'color-mode',
    preference: 'dark',
    fallback: 'dark',
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/alfredom',
    },
  },
});
