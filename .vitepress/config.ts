import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav: ThemeConfig['nav'] = [
  {
    text: '文档',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: '章节概览', link: '/guide/overview' },
    ]
  },
  {
    text: '示例',
    link: 'https://bevyengine.org/examples'
  },
  {
    text: '赞助',
    link: 'https://bevyengine.org/community/donate'
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/guide/introduction' },
        {
          text: '章节概览',
          link: '/guide/overview'
        },
        {
          text: '内置命令列表',
          link: '/guide/builtins'
        }
      ]
    },
    {
      text: '1. Bevy教程',
      link: '/guide/1.tutorial/introduction',
      items: [
        {
          text: '1.1 引导式教程',
          link: '/guide/1.tutorial/1.1guide',
        }
      ]
    },
    {
      text: '2. Bevy菜单',
      link: '/guide/2.cookbook/introduction',
      items: [
        
      ]
    },
    {
      text: '3. Bevy设置贴士',
      link: '/guide/3.setup/introduction',
      items: [
        
      ]
    },
    {
      text: '4. 常见问题',
      link: '/guide/4.pitfalls/introduction',
      items: [
        
      ]
    },
    {
      text: '5. 游戏引擎基础',
      link: '/guide/5.fundamentals/introduction',
      items: [
        
      ]
    },
    {
      text: '6. 通用图形特性',
      link: '/guide/6.graphics/introduction',
      items: [
        
      ]
    },
    {
      text: '7. 2D开发',
      link: '/guide/7.2d/introduction',
      items: [
        
      ]
    },
    {
      text: '8. 3D开发',
      link: '/guide/8.3d/introduction',
      items: [
        
      ]
    },
    {
      text: '9. 输入处理',
      link: '/guide/9.input/introduction',
      items: [
        
      ]
    }
  ],
}

const i18n: ThemeConfig['i18n'] = {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '前一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。'
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。'
  },
  footerLicense: {
    before: '',
    after: ''
  },
  ariaAnnouncer: {
    before: '',
    after: '已经加载完毕'
  },
  ariaDarkMode: '切换深色模式',
  ariaSkipToContent: '直接跳到内容',
  ariaToC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航',
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh-CN',
  title: '这是一本关于Bevy游戏引擎（GitHub）的参考书籍。',
  description: '旨在以简洁的方式教授Bevy概念，帮助您提高生产力，并发现您所需的知识。',
  srcDir: 'src',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],

  themeConfig: {
    nav,
    sidebar,
    i18n,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bevyengine/bevy' },
      { icon: 'twitter', link: 'https://twitter.com/BevyEngine' },
      { icon: 'discord', link: 'https://discord.com/invite/bevy' }
    ],

    footer: {
      license: {
        text: '版权声明',
        link: 'https://github.com/vuejs-translations/docs-zh-cn#%E7%89%88%E6%9D%83%E5%A3%B0%E6%98%8E'
      },
      copyright: '本中文文档采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议  (CC BY-NC-SA 4.0) 进行许可。'
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
})
