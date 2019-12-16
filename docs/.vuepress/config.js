// docs/.vuepress/config.js
module.exports = {
  title: 'AbelPark\'s diary',
  search: true,
  description: 'Let\'s get started',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'About me', link: '/about/'},
      { text: 'Database', link: '/database/' },
      { text: 'Front-end', link: '/frontend/',
        items: [
          { text: 'javascript', link: '/frontend/javascript/javascript_test' },
          { text: 'vue', link: '/frontend/vue/c' }
        ]
      },
      { text: 'vuepress', link: '/vuepress/'},
      { text: 'foo', link: '/foo/'},
      { text: 'bar', link: '/bar/'},
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      { title: 'kkk', path: '/bar/',
      children: [
        { title: 'javascript', path: '/frontend/javascript/javascript_test' },
        { title: 'vue', path: '/frontend/vue/c' }
      ]},
      { title: 'vuepress', path: '/vuepress/'},
      
    
    ]
  }
}
