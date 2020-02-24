module.exports = {
  plugins: ['@vuepress/nprogress', '@vuepress/back-to-top'],
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
      { text: '面试题', link: '/interview/' },
      {
        text: '源码解析',
        items: [
          { text: 'React', link: '/react/' },
          { text: 'Vue', link: '/vue/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/JohnsenZhou/Xanadu' },
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
                '/relearn/js/types'
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
        '',
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
                '/interview/js/debounce'
              ]
            },
            {
              title: 'CSS',
              path: '/interview/css/',
              collapsable: true,
              children: [
                '/interview/css/bfc',
                '/interview/css/center'
              ]
            }
          ]
        }
      ],
      '/react/': [
        '',
      ],
      '/vue/': [
        '',
      ],
    },
    markdown: {
      lineNumbers: true,
    },
    displayAllHeaders: true
  }
}