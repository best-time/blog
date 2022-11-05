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

const generateSidebar = (titleList = [], directory) => {
  return titleList.map(({ title, path }) => {
    return {
      title,
      path: `/${directory}/${path}`,
    };
  });
};

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
      // {
      //           text: '冴羽的 JavaScript 博客',
      //           items: [
      //               { text: 'Github', link: 'https://github.com/mqyqingfeng' },
      //               { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
      //           ]
      //       }
    ],
    sidebar: [
      {
        title: "javascript",
        path: "/js/js1",
        // collapsable: false,
        children: generateSidebar(javascript, "js"),
      },
      {
        title: "es6",
        path: "/es6/promise",
        // collapsable: false,
        children: [
          { title: "promise", path: "/es6/promise" },
          { title: "reflect", path: "/es6/Reflect" },
          // { title: "dom", path: "/es6/dom" },
          // { title: "元素位置", path: "/js/domPostion" },
          // { title: "正则", path: "/js/reg" },
          // { title: "函数式", path: "/js/function" },
          // { title: "操作符", path: "/js/operation" },
          // { title: "设计模式", path: "/js/designPatterns" }
        ],
      },
      {
        title: "frame",
        path: "/frame/vue",
        children: [{ title: "vue", path: "/frame/vue" }],
      },
    ],
  },
};

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
