// import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

// const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/ai-tutorials/': { base: '/ai-tutorials/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/dongyubin/wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2024-${new Date().getFullYear() + 1}`
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'AI Tutorials',
      link: '/ai-tutorials/janitor-ai',
      activeMatch: '/ai-tutorials/'
    },
    {
      text: 'Guide',
      link: '/guide/what-is-ai-tutorial',
      activeMatch: '/guide/'
    },

    // {
    //   text: 'Reference',
    //   link: '/reference/',
    //   activeMatch: '/reference/'
    // },
    // {
    //   // text: pkg.version,
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is AI Tutorial?', link: 'what-is-ai-tutorial' },
        // { text: 'Getting Started', link: 'getting-started' },
        // { text: 'Routing', link: 'routing' },
        // { text: 'Deploy', link: 'deploy' }
      ]
    },
    // {
    //   text: 'Writing',
    //   collapsed: false,
    //   items: [
    //     { text: 'Markdown Extensions', link: 'markdown' },
    //     { text: 'Asset Handling', link: 'asset-handling' },
    //     { text: 'Frontmatter', link: 'frontmatter' },
    //     { text: 'Using Vue in Markdown', link: 'using-vue' },
    //     { text: 'Internationalization', link: 'i18n' }
    //   ]
    // },
    // {
    //   text: 'Customization',
    //   collapsed: false,
    //   items: [
    //     { text: 'Using a Custom Theme', link: 'custom-theme' },
    //     {
    //       text: 'Extending the Default Theme',
    //       link: 'extending-default-theme'
    //     },
    //     { text: 'Build-Time Data Loading', link: 'data-loading' },
    //     { text: 'SSR Compatibility', link: 'ssr-compat' },
    //     { text: 'Connecting to a CMS', link: 'cms' }
    //   ]
    // },
    // {
    //   text: 'Experimental',
    //   collapsed: false,
    //   items: [
    //     { text: 'MPA Mode', link: 'mpa-mode' },
    //     { text: 'Sitemap Generation', link: 'sitemap-generation' }
    //   ]
    // },
    // { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [

    {
      text: 'Text&Writing',
      collapsed: true,
      items: []
    },
    {
      text: 'Image',
      collapsed: true,
      items: []
    },
    {
      text: 'Video',
      collapsed: true,
      items: []
    },
    {
      text: 'Code&IT',
      collapsed: true,
      items: []
    },
    {
      text: 'Voice',
      collapsed: true,
      items: []
    },
    {
      text: 'Business',
      collapsed: true,
      items: []
    },
    {
      text: 'Marketing',
      collapsed: true,
      items: []
    },
    {
      text: 'AI Detector',
      collapsed: true,
      items: []
    },
    {
      text: 'Chatbot',
      collapsed: true,
      items: [
        { text: 'Janitor AI', link: 'janitor-ai' },
        { text: 'Saner.AI', link: 'saner-ai-beta-version' },
      ]
    },
    {
      text: 'Design&Art',
      collapsed: true,
      items: []
    },
    {
      text: 'Life Assistant',
      collapsed: true,
      items: []
    },
    {
      text: '3D',
      collapsed: true,
      items: []
    },
    {
      text: 'Education',
      collapsed: true,
      items: []
    },
    {
      text: 'Prompt',
      collapsed: true,
      items: []
    },
    {
      text: 'Productivity',
      collapsed: true,
      items: []
    },
    {
      text: 'Other',
      collapsed: true,
      items: []
    }

  ]
}