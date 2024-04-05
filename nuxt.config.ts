import { appDescription } from './constants/index'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/seo',
    'nuxt-lucide-icons',
    '@vite-pwa/nuxt',
    '@nuxt/eslint'
  ],
  experimental: {
    watcher: 'parcel', // 'chokidar' or 'parcel' are also options
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      routes: [
        '/'
      ],
    },
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      titleTemplate: '%s | Nuxt',
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa-IR',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#F4F4F5' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#09090B' },
      ],
    },

  },
  lucide: {
    namePrefix: 'Icon',
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  runtimeConfig: {
    public: {
      baseApi: '', // Base Api environment variable
      baseStorage: '', // Base Media environment variable
      domain: '', // Domain environment variable
    },
  },
  colorMode: {
    classSuffix: '',
  },
  tailwindcss: {
    viewer: false,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },

})
