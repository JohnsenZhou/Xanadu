module.exports = [
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
]