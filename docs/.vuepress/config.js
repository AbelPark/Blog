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
      {text: 'Frontend', link: '/frontend/'},
      {text: 'Backend', link: '/backend/'},
      {text: 'DataBase', link: '/database/'},
      {text: 'ETC.', link: '/etc/'},
      {text: 'list', link: '/tags/'},
      {text: 'I\'m', link: '/im/'}
    ],
    sidebar: {
      '/frontend/': [
        {title: 'Vuejs',
          children: [
            {title: '개발환경 설정하기', path: '/frontend/vuejs/VueSettings.md'},
          ]},
        {title: 'Javascript',
          children: [
            {title: '이벤트리스너', path: '/frontend/javascript/01js_event_listener.md'},
          ]},
        {title: 'Html/css',
          children: [
            {title: '레이어 중앙 정렬하기', path: '/frontend/html_css/01ui_fixed.md'},
          ]},
      ],
      '/backend/': [
        {title: 'Python',
          children: [
            {title: '개발환경 설정하기', path: '/backend/python/01PySettings.md'},
          ]},
      ],
      '/database/':[
        {title: 'Mysql',
          children: [
            {title: '개발환경 설정하기', path: '/database/mysql/SqlSettings.md'},
          ]},
        {title: 'Anaconda',
          children: [
            {title: '개발환경 설정하기', path: '/database/anaconda/AnaSettings.md'},
          ]}
      ],
      '/etc/':[
        {title: 'vuepress',
          children: [
            {title: '시작하기', path: '/etc/vuepress/VpStart.md'},
            {title: '목록 만들기', path: '/etc/vuepress/VpList.md'},
          ]},
      ],
    }
  }
}
