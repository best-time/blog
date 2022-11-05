# 换肤方案

## 要实现的需求

```
默认有几套主题色供用户选择
用户也可以自定义主题色
用户选定主题后需立即生效，无需重启项目或重新打包项目

核心: css var() 变量使用

```

```
/src/theme/style.less

// 默认的主题颜色
@primaryColor: var(--primaryColor, #000);
@primaryTextColor: var(--primaryTextColor, green);
// 导出变量
:export {
  name: "less";
  primaryColor: @primaryColor;
  primaryTextColor: @primaryTextColor;
}

vue.config.js文件，编写配置

const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
        path.resolve(__dirname, "./src/theme/style.less"),
      ],
    },
  },
};


<style lang="less" scoped>
p {
    color: @primaryTextColor;
}
</style>



```

```

在/src/theme目录下新建model.js

// 一套默认主题以及一套暗黑主题
// 一套默认主题以及一套暗黑主题
export const themes = {
  default: {
    primaryColor: `${74}, ${144},${226}`,
    primaryTextColor: `${74}, ${144},${226}`,
  },
  dark: {
    primaryColor: `${0},${0},${0}`,
    primaryTextColor: `${0},${0},${0}`,
  },
};



import { themes } from "./model";
// 修改页面中的样式变量值
const changeStyle = (obj) => {
  for (let key in obj) {
    document
      .getElementsByTagName("body")[0]
      .style.setProperty(`--${key}`, obj[key]);
  }
  // document.documentElement.style.setProperty('--color-primary', '#aaa')

};
// 改变主题的方法
export const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName); // 保存主题到本地，下次进入使用该主题
  const themeConfig = themes[themeName];
  // 如果有主题名称，那么则采用我们定义的主题
  if (themeConfig) {
    localStorage.setItem("primaryColor", themeConfig.primaryColor); // 保存主题色到本地
    localStorage.setItem("primaryTextColor", themeConfig.primaryTextColor); // 保存文字颜色到本地
    changeStyle(themeConfig); // 改变样式
  } else {
    let themeConfig = {
      primaryColor: localStorage.getItem("primaryColor"),
      primaryTextColor: localStorage.getItem("primaryTextColor"),
    };
    changeStyle(themeConfig);
  }
};


```

## 利用class命名空间

```
优点：简单、容易理解，非常容易实现。

缺点：需要定义class、手动维护、容易混乱
```

## 预备多套CSS主题（推荐

```
优点：非常好理解，一套主题定义一套css

缺点：需要手写多套css样式代码，且更换主题需要下载新的css样式代码。
```

## 动态换肤

```

原理：主要是基于element-ui换肤方案的实现，生成一套主题， 将主题配色配置写在js中，在浏览器中用js动态修改style标签覆盖原有的CSS。
优点：通过定义函数的形式自动替换、操作性较强
缺点：需要有统一打包出来的index.css，实现难度较高。
```

## less在线编译实现

```
原理：使用 modifyVars()方法, 基于 less 在浏览器中的编译来实现。在引入less文件的时候需要通过link方式引入，然后基于less.js中的方法来进行修改less变量。
特点：编译速度依赖客户端性能、切换不及时，运行时编译、需要额外引入less.main.js、样式文件通过link方式引入。
这种方式一般不推荐
```

## CSS变量换肤（推荐）

```
优点：只需一套CSS文件；换肤不需要延迟等候；对浏览器性能要求低；可自动适配多种主题色

缺点：不兼容IE
```