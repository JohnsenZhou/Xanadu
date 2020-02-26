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
              children: [
                '/relearn/js/types',
                '/relearn/js/object'
              ]
            },
            {
              title: 'CSS',
              collapsable: true,
              children: [
                // '/relearn/css/types'
              ]
            },
            {
              title: 'HTML',
              collapsable: true,
              children: [
                // '/relearn/html/types'
              ]
            },
            {
              title: '浏览器实现原理与API',
              collapsable: true,
              children: [
                '/relearn/browser/how'
              ]
            },
            {
              title: '前端综合应用',
              collapsable: true,
              children: [
                '/relearn/allin/performance'
              ]
            },
          ]
        }
      ],
      '/algorithm/': [
        {
          title: '算法',
          collapsable: false,
          children: [
            ['', '介绍'],
            'complexity-analysis',
            'array-linked-list',
          ]
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
              children: [
                '/interview/js/1',
                '/interview/js/2',
                '/interview/js/3',
                '/interview/js/4',
                '/interview/js/5',
                '/interview/js/6'
              ]
            },
            {
              title: 'CSS',
              path: '/interview/css/',
              collapsable: true,
              children: [
                '/interview/css/1',
                '/interview/css/2'
              ]
            },
            {
              title: '异步',
              collapsable: true,
              children: [
                '/interview/async/1',
                '/interview/async/2',
              ]
            }
          ]
        }
      ],
      '/pattern/': [
        '',
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