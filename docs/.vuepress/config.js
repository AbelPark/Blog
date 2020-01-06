// docs/.vuepress/config.js
module.exports = {
  title: 'AbelPark',
  search: true,
  description: 'Let\'s get started',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {text: 'Frontend', link: '/01frontend/'},
      {text: 'Backend', link: '/02backend/'},
      {text: 'DataBase', link: '/03database/'},
      {text: 'ETC.', link: '/04etc/'},
      {text: 'list', link: '/05list/'},
      {text: 'I\'m', link: '/06im/'}
    ],
    sidebar: {
      '/01frontend/': [
        {title: 'Vuejs',
          children: [
            {title: '개발환경 설정하기', path: '/01frontend/01vuejs/01vue_settings.md'},
          ]},
        {title: 'Javascript',
          children: [
            {title: '이벤트리스너', path: '/01frontend/02javascript/01js_event_listener.md'},
          ]},
        {title: 'Html/css',
          children: [
            {title: '레이어 중앙 정렬하기', path: '/01frontend/03htmlCss/01ui_fixed.md'},
          ]},
      ],
      '/02backend/': [
        {title: 'Python',
          children: [
            {title: '개발환경 설정하기', path: '/02backend/01python/01py_settings.md'},
          ]},
      ],
      '/03database/':[
        {title: 'Mysql',
          children: [
            {title: '개발환경 설정하기', path: '/03database/01mysql/01sql_settings.md'},
          ]},
        {title: 'Anaconda',
          children: [
            {title: '개발환경 설정하기', path: '/03database/02anaconda/01ana_settings.md'},
          ]}
      ],
      '/04etc/':[
        {title: 'vuepress',
          children: [
            {title: '시작하기', path: '/04etc/01vuepress/01vp_start.md'},
            {title: '목록 만들기', path: '/04etc/01vuepress/02vp_list.md'},
          ]},
      ],
    }
  }
}
