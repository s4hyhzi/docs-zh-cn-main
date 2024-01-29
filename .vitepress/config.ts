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
      {
        text: '引导式教程',
        link: '/book/1.tutorial/1.1guide',
      },
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
  '/book/': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/book/introduction' },
        {
          text: '章节概览',
          link: '/book/overview'
        },
        {
          text: '内置命令列表',
          link: '/book/builtins'
        }
      ]
    },
    {
      text: '1. Bevy教程',
      link: '/book/1.tutorial/introduction',
      items: [
        {
          text: '1.1 引导式教程',
          link: '/book/1.tutorial/1.1guide',
        }
      ]
    },
    {
      text: '2. Bevy菜单',
      link: '/book/2.cookbook/introduction',
      items: [

      ]
    },
    {
      text: '3. Bevy设置技巧',
      link: '/book/3.setup/introduction',
      items: [
        {
          text: '3.1 开始',
          link: '/book/3.setup/3.1getting-started'
        }
      ]
    },
    {
      text: '4. 常见问题',
      link: '/book/4.pitfalls/introduction',
      items: [

      ]
    },
    {
      text: '5. 游戏引擎基础',
      link: '/book/5.fundamentals/introduction',
      items: [
        {
          text: '5.1 坐标系统',
          link: '/book/5.fundamentals/5.1coords',
        },
        {
          text: '5.2 变换（Transforms）',
          link: '/book/5.fundamentals/5.2transforms',
        },
        {
          text: '5.4 时间和定时器',
          link: '/book/5.fundamentals/5.4time',
        }
      ]
    },
    {
      text: '6. 通用图形特性',
      link: '/book/6.graphics/introduction',
      items: [
        {
          text: '6.1 相机',
          link: '/book/6.graphics/6.1camera'
        }
      ]
    },
    {
      text: '7. 2D开发',
      link: '/book/7.2d/introduction',
      items: [

      ]
    },
    {
      text: '8. 3D开发',
      link: '/book/8.3d/introduction',
      items: [

      ]
    },
    {
      text: '9. 输入处理',
      link: '/book/9.input/introduction',
      items: [

      ]
    },
    {
      text: '10. 窗口管理',
      link: '/book/10.window/introduction',
      items: [

      ]
    },
    {
      text: '11. 资产管理',
      link: '/book/11.assets/introduction',
      items: [
        {
          text: "11.2 从文件加载资产",
          link: '/book/11.assets/11.2assetserver'
        }
      ]
    },
    {
      text: '12. 音频',
      link: '/book/12.audio/introduction',
      items: [

      ]
    },
    {
      text: '13. UI框架',
      link: '/book/13.ui/introduction',
      items: [

      ]
    },
    {
      text: '14. 编程框架',
      link: '/book/14.programming/introduction',
      items: [
        {
          text: '14.1 ECS简介',
          link: '/book/14.programming/14.1ecs-intro',
        },
        {
          text: '14.2 介绍：你的数据',
          link: '/book/14.programming/14.2intro-data',
        },
        {
          text: '14.4 应用构建器（App）',
          link: '/book/14.programming/14.4app-builder'
        },
        {
          text: '14.5 系统（Systems）',
          link: '/book/14.programming/14.5systems',
        },
        {
          text: '14.6 资源（Resources）',
          link: '/book/14.programming/14.6res',
        },
        {
          text: '14.8 捆绑包（Bundles）',
          link: '/book/14.programming/14.8bundle',
        },
        {
          text: '14.9 查询（Query）',
          link: '/book/14.programming/14.9queries',
        },
        {
          text: '14.10 命令（Commands）',
          link: '/book/14.programming/14.10commands',
        }
      ]
    },
    {
      text: '15. 渲染（GPU）框架',
      link: '/book/15.gpu/introduction',
      items: [

      ]
    },
    {
      text: '16. 编程模式',
      link: '/book/16.patterns/introduction',
      items: [

      ]
    },
    {
      text: '17. 跨平台运行',
      link: '/book/17.platforms/introduction',
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
