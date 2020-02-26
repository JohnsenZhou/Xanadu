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
      { text: '面试题', link: '/interview/' },
      {
        text: '源码解析',
        items: [
          { text: 'React', link: '/react/' },
          { text: 'Vue', link: '/vue/' }
        ]
      },
    ],
    sidebar: require('./sidebar'),
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