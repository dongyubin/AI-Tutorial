import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
// import { search as ptSearch } from './pt'

export const shared = defineConfig({
  title: "AI Tutorial",
  description: "Discover The Best AI Tutorial Websites & Tools Tutorial",
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://aitutorial.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/aitutorial-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'keywords', content: 'AI Tutorial,Tutorial,AI Tools Tutorial,AI Guide' }],
    ['meta', { name: "description", content: "Discover The Best AI Tutorial Websites & Tools Tutorial" }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'AI Tutorial | Discover The Best AI Tutorial Websites & Tools Tutorial' }],
    ['meta', { property: 'og:site_name', content: 'AI Tutorial' }],
    ['meta', { property: 'og:image', content: 'https://aitutorial.dev/og.png' }],
    ['meta', { name: "og:description", content: "AI Tutorial，Discover The Best AI Tutorial Websites & Tools Tutorial" }],
    ['meta', { property: 'og:url', content: 'https://aitutorial.dev' }],
    ['meta', { name: 'google-site-verification', content: '2_r2LM-rqlahQyh2PQzDtHZyCo0uWGmvebxqzml6HYU' }],
    // ['script', { src: 'https://font.wangdu.site/script.js', 'data-website-id': 'f1d6d35a-b736-4702-95dd-03bf623debf3' }],
    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:creator', content: '@wwkjs666' }],
    ['meta', { property: 'twitter:title', content: 'AI Tutorial | Discover The Best AI Tutorial Websites & Tools Tutorial' }],
    ['meta', { property: 'twitter:site', content: 'AI Tutorial' }],
    ['meta', { property: 'twitter:image', content: 'https://aitutorial.dev/og.png' }],
    ['meta', { property: 'twitter:description', content: 'Discover The Best AI Tutorial Websites & Tools Tutorial' }]
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: '/aitutorial-logo-mini.png', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dongyubin' },
      { icon: 'twitter', link: 'https://twitter.com/wwkjs666' }
    ],
    // search: {
    //   provider: 'local'
    // }

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: 'I6ACIL0K09',
    //     apiKey: '7873521a47b0fffb076ec2f7b978efc2',
    //     indexName: 'wangdu',
    //     locales: { ...zhSearch }
    //     // locales: { ...zhSearch, ...ptSearch }
    //   }
    // },

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})