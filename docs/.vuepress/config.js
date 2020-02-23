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
        '',
      ],
      '/algorithm/': [
        '',
      ],
      '/interview/': [
        '',
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