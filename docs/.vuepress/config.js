const fs = require('fs')
module.exports = {
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          const moment = require('moment')
          moment.locale('zh-CN')
          return moment(timestamp).fromNow()
        }
      }
    ]
  ],
  base: '/Xanadu/',
  title: 'Xanadu',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  description: '📝The road of front-end offer',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '重学前端', link: '/relearn/' },
      { text: '算法', link: '/algorithm/' },
      { text: '设计模式', link: '/pattern/' },
      { text: '面试题', link: '/interview/' },
      {
        text: '源码解析',
        items: [
          { text: 'React', link: '/react/' },
          { text: 'Vue', link: '/vue/' },
          { text: 'webpack', link: '/webpack/' },
        ]
      },
    ],
    sidebar: {
      '/guide/': [
        '',
      ],
      '/relearn/': [
        {
          title: '重学前端',
          collapsable: false,
          children: [
            ['', '介绍'],
            {
              title: 'JavaScript',
              children: generatePath('/relearn/js')
            },
            {
              title: 'CSS',
              children: generatePath('/relearn/css')
            },
            {
              title: 'HTML',
              children: generatePath('/relearn/html')
            },
            {
              title: '浏览器实现原理与API',
              children: generatePath('/relearn/browser')
            },
            {
              title: '前端综合应用',
              children: generatePath('/relearn/allin')
            },
          ]
        }
      ],
      '/algorithm/': [
        {
          title: '算法',
          collapsable: false,
          children: generatePath('/algorithm')
        }
      ],
      '/interview/': [
        {
          title: '面试题',
          collapsable: false,
          children: [
            ['', '介绍'],
            {
              title: 'JavaScript',
              children: generatePath('/interview/js')
            },
            {
              title: 'CSS',
              children: generatePath('/interview/css')
            },
            {
              title: '异步',
              children: generatePath('/interview/async')
            },
            {
              title: '网络',
              children: generatePath('/interview/network')
            },
            {
              title: '浏览器',
              children: generatePath('/interview/browser')
            },
            {
              title: '框架相关',
              children: generatePath('/interview/frame')
            },
            {
              title: '编程题',
              children: generatePath('/interview/code')
            },
          ]
        }
      ],
      '/pattern/': [
        {
          title: '设计模式',
          collapsable: false,
          children: generatePath('/pattern')
        }
      ],
      '/react/': [
        '',
      ],
      '/vue/': [
        {
          title: 'Vue 2.x 源码解析',
          collapsable: false,
          children: generatePath('/vue')
        }
      ],
      '/webpack/': [
        {
          title: 'webpack 源码解析',
          collapsable: false,
          children: generatePath('/webpack')
        }
      ]
    },
    repo: 'JohnsenZhou/Xanadu',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    markdown: {
      lineNumbers: true,
    },
  }
}

function generatePath(path) {
  const targetPath = process.cwd() + '/docs' + path
  if (!fs.existsSync(targetPath)) return []
  const files = fs.readdirSync(targetPath).filter(item => item.includes('md'))
  const result = []
  files.forEach(item => {
    if (item.includes('README')) {
      result.unshift([`${path}/`, '介绍'])
    } else {
      result.push(`${path}/${item}`)
    }
  })
  return result
}