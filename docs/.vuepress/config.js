// 注意: base的值为github仓库的名称(/不能少)
module.exports = {
  base: '/QL-c.github.io/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: '前端研究', // 标题
  description: 'JS,Vue,React,算法', // 标题下的描述
  
  themeConfig: { // 主题配置
    logo: '/头像.jpg',
    nav: [ // 头部导航
      { text: 'gitee', link: 'http://www.gitee.com' },
      { 
        text: '便捷文档', 
        items: [
          { text: 'ES6', link: 'https://blog.csdn.net/lyyrhf/article/details/115338763' },
          { text: 'jQuery', link: 'https://jquery.cuishifeng.cn/' },
          { text: 'BootCDN', link: 'https://www.bootcdn.cn/' }
        ] 
      },
    ],
    sidebar: 'auto', // 侧边栏配置
  
    sidebarDepth: 3 // 左侧导航的深度默认是2级
  },


  head: [ // 指定网页head图标
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["koharu"],
        clean: false,
        modelStyle: {
          position: "fixed",
          right: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999, 
        },
        width:215,
        height:300,
        messages:{
          welcome: '欢迎来到前端研究' ,
          home: ' ╰(￣▽￣)周周在干嘛呢？ ', 
          theme: '好吧，希望你能喜欢我的其他小伙伴。', 
          close: '你知道我喜欢吃什么吗？痴痴地望着你。'
        },
        btnStyle:{
          right: '190px',
          bottom: '180px'
        },
        messageStyle:{
          right: '190px', 
          bottom: '300px'
        }
      }
    ]
  ]
}