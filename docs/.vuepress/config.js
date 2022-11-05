const javascript = [
  { title: "基础", path: "js1" },
  { title: "element", path: "classList" },
  { title: "dom", path: "dom" },
  { title: "bit", path: "bit" },
  { title: "元素位置", path: "domPosition" },
  { title: "正则", path: "reg" },
  { title: "函数式", path: "function" },
  { title: "操作符", path: "operation" },
  { title: "设计模式", path: "designPatterns" },
];

const es6List = [
  {title: 'extend', path: 'extend'},
  {title: 'promise', path: 'promise'},
  {title: 'promise-demo', path: 'Promise2'},
  {title: 'reflect', path: 'Reflect'},
  {title: 'Set-Map', path: 'SetMap'},
  {title: 'decorate', path: 'decorate'},
  {title: 'proxy', path: 'Proxy'},
  {title: 'module', path: 'module'},
  {title: 'generator', path: 'Generator'},
]
const handbookList = [
  {title: '循环', path: 'cycle'},

]

const tsList = [
  {title: 'typescript', path: 'typescript'},
  {title: 'typescript', path: 'typescript1'},

]


const vueList = [
  {title: 'vue', path: 'vue'},
  {title: 'vue', path: 'vue1'},
  {title: 'vuex', path: 'vuex'},
  {title: 'pinia', path: 'pinia'},

]
const cssList = [
  {title: 'css', path: 'css'},
  {title: 'sass', path: 'sass'},

]

const webpackList = [
  {title: '配置', path: 'set'},

]

const gitList = [
  {title: 'git', path: 'api'},

]
const otherList = [
  {title: 'codeReview', path: 'codeReview'},
  {title: 'collect', path: 'collect'},
  {title: '常见问题', path: 'problem'},
  {title: '换肤', path: 'switchSkin'},
  {title: '电子书', path: 'ebook'},
  {title: '健康', path: 'health'},
]

module.exports = {
  base: "/blog/",
  title: "记录",
  description: "笔记",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      // {text: "js", link: '/js/'},

      { text: "javascript", items: [{ text: "js", link: "/js/classList" }] },
      { text: "frame", link: "/frame/vue" },
      //           items: [
      //               { text: 'Github', link: 'https://github.com/mqyqingfeng' },
      //               { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
      //           ]
    ],
    sidebar: [
      {
        title: "javascript",
        path: "/js/js1",
        // collapsable: false,
        children: generateSidebar(javascript, "js")
      },
      {
        title: "es6",
        path: "/es6/promise",
        // collapsable: false,
        children: generateSidebar(es6List, "es6")
      },
      {
        title: "vue",
        path: "/vue/vue",
        children: generateSidebar(vueList, "vue")
      },
      {
        title: "css",
        path: "/css/css",
        children: generateSidebar(cssList, "css")
      },
      {
        title: "git",
        path: "/git/api",
        children: generateSidebar(gitList, "git")
      },
      {
        title: "webpack",
        path: "/webpack/set",
        children: generateSidebar(webpackList, "webpack"),
      },
      {
        title: "typescript",
        path: "/typescript/",
        children: generateSidebar(tsList, "typescript"),
      },
      {
        title: "手册",
        path: "/handbook/cycle",
        children: generateSidebar(handbookList, "handbook"),
      },
      {
        title: "包罗万象",
        path: "/other/",
        children: generateSidebar(otherList, "other"),
      },
    ],
  },
};

function generateSidebar (titleList = [], directory) {
  return titleList.map(({ title, path }) => {
    return {
      title,
      path: `/${directory}/${path}`,
    };
  });
}
/*

'/js/': [
        {
          title: 'js',
          children: [
            // '/',
            'designPatterns',
            'classList',
          ],
        }
      ],



{
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }

*/
