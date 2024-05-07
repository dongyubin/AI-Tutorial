// import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'
// const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')

export const zh = defineConfig({
  lang: 'zh-Hans',
  // description: '由 Vite 和 Vue 驱动的静态站点生成器',
  // cleanUrls: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
      '/zh/ai-tutorials/': { base: '/zh/ai-tutorials/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/dongyubin/AI-Tutorial/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()}`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      level: 'deep',
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'AI Tutorials',
      link: '/zh/ai-tutorials/janitor-ai',
      activeMatch: '/zh/ai-tutorials/'
    },
    {
      text: '指南',
      link: '/zh/guide/what-is-ai-tutorial',
      activeMatch: '/zh/guide/'
    },
    {
      // text: pkg.version,
      items: [
        {
          text: '博客',
          link: 'https://www.wangdu.site'
        },
        {
          text: 'MD翻译',
          link: 'https://mt.wwkejishe.top'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 AI Tutorial？', link: 'what-is-ai-tutorial' },
      ]
    },
    // {
    //   text: '编程',
    //   collapsed: true,
    //   items: [
    //     { text: 'Python', link: 'code-python' },
    //     { text: 'VitePress', link: 'code-vitepress-vercel' },
    //     {
    //       text: 'WordPress',
    //       collapsed: false,
    //       items: [
    //         { text: 'AI Article Summary', link: 'wordpress-ai-article-summary' },
    //       ]
    //     },
    //   ]
    // },
    // {
    //   text: '出海',
    //   collapsed: true,
    //   items: [
    //     { text: '出海灵感、工具', link: 'money-indiehackers' },
    //   ]
    // },
    // {
    //   text: 'Apple ID',
    //   collapsed: true,
    //   items: [
    //     { text: '帐号解锁与找回', link: 'apple-id-not-active' },
    //   ]
    // },
    // {
    //   text: 'AI 工具',
    //   collapsed: true,
    //   items: [
    //     {
    //       text: 'ChatGPT',
    //       collapsed: false,
    //       items: [
    //         { text: 'Coze 搭建 ChatGPT4', link: 'ai-coze-chatgpt4' },
    //       ]
    //     },

    //   ]
    // },
    // { text: '软件', base: '/software/', link: 'search-engines' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '文字与写作',
      collapsed: true,
      items: []
    },
    {
      text: '图像',
      collapsed: true,
      items: []
    },
    {
      text: '视频',
      collapsed: true,
      items: []
    },
    {
      text: '代码&IT',
      collapsed: true,
      items: []
    },
    {
      text: '音频',
      collapsed: true,
      items: []
    },
    {
      text: '商业',
      collapsed: true,
      items: []
    },
    {
      text: '营销',
      collapsed: true,
      items: []
    },
    {
      text: 'AI检测器',
      collapsed: true,
      items: []
    },
    {
      text: '聊天机器人',
      collapsed: true,
      items: [
        { text: 'Janitor AI', link: 'janitor-ai' },
        { text: 'Saner.AI', link: 'saner-ai-beta-version' },
      ]
    },
    {
      text: '设计与艺术',
      collapsed: true,
      items: []
    },
    {
      text: '生活助理',
      collapsed: true,
      items: []
    },
    {
      text: '3D',
      collapsed: true,
      items: []
    },
    {
      text: '教育',
      collapsed: true,
      items: []
    },
    {
      text: 'Prompt',
      collapsed: true,
      items: []
    },
    {
      text: '高效工作',
      collapsed: true,
      items: []
    },
    {
      text: '其他',
      collapsed: true,
      items: []
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}