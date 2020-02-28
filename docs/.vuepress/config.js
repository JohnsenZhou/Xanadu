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
          { text: 'Vue', link: '/vue/' }
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
              collapsable: true,
              children: generatePath('/relearn/js')
            },
            {
              title: 'CSS',
              collapsable: true,
              children: generatePath('/relearn/css')
            },
            {
              title: 'HTML',
              collapsable: true,
              children: generatePath('/relearn/html')
            },
            {
              title: '浏览器实现原理与API',
              collapsable: true,
              children: generatePath('/relearn/browser')
            },
            {
              title: '前端综合应用',
              collapsable: true,
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
              path: '/interview/js/',
              collapsable: true,
              children: generatePath('/interview/js')
            },
            {
              title: 'CSS',
              path: '/interview/css/',
              collapsable: true,
              children: generatePath('/interview/css')
            },
            {
              title: '异步',
              collapsable: true,
              children: generatePath('/interview/async')
            }
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
        '',
      ],
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