// docs/.vuepress/config.js
module.exports = {
  title: 'AbelPark',
  search: true,
  description: 'Let\'s get started',
  themeConfig: {
    nav: [
      {text: 'Web', link: '/01web/',
        items: [
          {text: 'Vue.js', link: '/01web/01vuejs/'},
          {text: 'Vuepress', link: '/01web/02vuepress/'},
          {text: 'Javascript', link: '/01web/03javascript/'},
        ]
      },
      {text: 'Database', link: '/02database/',
        items: [
          {text: 'Mysql', link: '/02database/01mysql/'},
          {text: 'Python', link: '/02database/02python/'},
        ]
      },
      {text: '오늘의 삽질', link: '/03shovel/'},
      {text: '생각 갈무리', link: '/04thought/'},
      {text: '저는', link: '/99iam/'},
    ],
    sidebar: {
      '/01web/': [
        {title: 'Vue.js', path: '/01web/01vuejs/',
          children: [
            {title: '라이브러리 사용법', path: '/01web/01vuejs/01useage.md'},
            {title: 'vue', path: '/01web/01vuejs/02test.md' }
          ]},
        {title: 'Vuepress', path: '/01web/02vuepress/'},
        {title: 'Javascript', path: '/01web/03javascript/'},
      ],
      '/02database/': [
        {title: 'Database', path: '/02database/01mysql/'},
        {title: 'Python', path: '/02database/02python/'},
      ],
      '/03shovel/':[
        {title: '20191220', path: '/03shovel/20191220.md'},
        {title: '20191221', path: '/03shovel/20191221.md'},
      ],
      '/04thought/':[
        {title: '사람에 대한 평가', path: '/04thought/01judge.md'},
        {title: '종교에 대해', path: '/04thought/02religion.md'},
      ]
    }
  }
}
