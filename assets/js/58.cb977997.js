(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{597:function(t,a,n){"use strict";n.r(a);var s=n(12),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" typescript")]),t._v(" "),n("h2",{attrs:{id:"下面列举了四种常见的无法正常工作的场景以及对应的解决方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下面列举了四种常见的无法正常工作的场景以及对应的解决方法"}},[t._v("#")]),t._v(" 下面列举了四种常见的无法正常工作的场景以及对应的解决方法：")]),t._v(" "),n("h2",{attrs:{id:"库本身没有自带类型定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#库本身没有自带类型定义"}},[t._v("#")]),t._v(" 库本身没有自带类型定义")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("在初次将 react 改造支持 typescript 时, 想必很多人都会遇到 module.hot 报错.\n 此时只需要安装对应的类型库即可.\n安装 @types/webpack-env\n\n")])])]),n("h2",{attrs:{id:"库本身没有类型定义-也没有相关的-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#库本身没有类型定义-也没有相关的-type"}},[t._v("#")]),t._v(" 库本身没有类型定义, 也没有相关的@type")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('那只能自己声明一个了. 随便举个栗子.\ndeclare module "lodash"\n')])])]),n("h2",{attrs:{id:"类型声明库有误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类型声明库有误"}},[t._v("#")]),t._v(" 类型声明库有误")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("1. 推动解决官方类型定义的问题, 提issue, pr\n2. Import 后通过 extends 或者 merge 能力对原类型进行扩展\n3. 忍受类型的丢失或不可靠性\n4. 使用 // @ts-ignore  忽略\n\n")])])]),n("h2",{attrs:{id:"类型声明报错"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类型声明报错"}},[t._v("#")]),t._v(" 类型声明报错")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('在 compilerOptions 的添加"skipLibCheck": true, 曲线救国\n')])])]),n("h1",{attrs:{id:"下面列举了几种常见的解决方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下面列举了几种常见的解决方法"}},[t._v("#")]),t._v(" 下面列举了几种常见的解决方法：")]),t._v(" "),n("h2",{attrs:{id:"类型断言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类型断言"}},[t._v("#")]),t._v(" 类型断言")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[t._v("语法如下"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("类型"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("值\n\n值 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 类型\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 推荐使用这种语法. 因为<>容易跟泛型, react 中的语法起冲突")]),t._v("\n\n举个例子"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 如下代码"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  padding 值可以是 "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 也可以是 "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n虽然在代码里面写了 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 我们明确的知道"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\npadding 会被parseint 转换成 "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" 类型"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 但类型定义依然会报错"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("padLeft")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" padding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错: Operator '+' cannot be applied to")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// types 'string | number' and 'number'")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n解决方法"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 使用类型断言"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 告诉 typescript 这里我确认它是 "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" 类型"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 忽略报错"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("padLeft")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" padding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正常")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n但是如果有下面这种情况"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 我们要写很多个 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" 么"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("padLeft")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" padding"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"类型守卫"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类型守卫"}},[t._v("#")]),t._v(" 类型守卫")]),t._v(" "),n("p",[t._v('类型守卫有以下几种方式, 简单的概括以下\ntypeof:  用于判断 "number"，"string"，"boolean"或 "symbol" 四种类型.')]),t._v(" "),n("p",[t._v("instanceof : 用于判断一个实例是否属于某个类")]),t._v(" "),n("p",[t._v("in: 用于判断一个属性/方法是否属于某个对象")]),t._v(" "),n("p",[t._v("字面量类型保护")]),t._v(" "),n("p",[t._v("上面的例子中, 是 string | number 类型, 因此使用 typeof 来进行类型守卫. 例子如下:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function padLeft(value: string,padding: string | number) {\n   if (typeof padding === 'number') {\n       console.log(padding + 3); //正常\n       console.log(padding + 2); //正常\n       console.log(padding + 5); //正常\n        //正常\n       return Array(padding + 1).join(' ')value;\n   }\n   if (typeof padding === 'string') {\n       return padding + value;\n   }\n}\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("instanceof :用于判断一个实例是否属于某个类\nclass Man {\n   handsome = 'handsome';\n}\n\nclass Woman {\n   beautiful = 'beautiful';\n}\n\nfunction Human(arg: Man | Woman) {\n   if (arg instanceof Man) {\n       console.log(arg.handsome);\n       console.log(arg.beautiful); // error\n   } else {\n       // 这一块中一定是 Woman\n       console.log(arg.beautiful);\n   }\n}\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("in : 用于判断一个属性/方法是否属于某个对象\ninterface B {\n   b: string;\n}\n\ninterface A {\n   a: string;\n}\n\nfunction foo(x: A | B) {\n   if ('a' in x) {\n       return x.a;\n   }\n   return x.b;\n}\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("字面量类型保护\n有些场景, 使用 in, instanceof, typeof 太过麻烦. 这时候可以自己构造一个字面量类型.\ntype Man = {\n   handsome: 'handsome';\n   type: 'man';\n\n};\n\ntype Woman = {\n   beautiful: 'beautiful';\n   type: 'woman';\n};\n\nfunction Human(arg: Man | Woman) {\n   if (arg.type === 'man') {\n       console.log(arg.handsome);\n       console.log(arg.beautiful); // error\n   } else {\n       // 这一块中一定是 Woman\n       console.log(arg.beautiful);\n   }\n}\n")])])]),n("h2",{attrs:{id:"双重断言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双重断言"}},[t._v("#")]),t._v(" 双重断言")]),t._v(" "),n("p",[t._v("有些时候使用 as 也会报错,因为 as 断言的时候也不是毫无条件的. 它只有当S类型是T类型的子集，或者T类型是S类型的子集时，S能被成功断言成T.\n所以面对这种情况, 只想暴力解决问题的情况, 可以使用双重断言.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function handler(event: Event) {\n   const element = event as HTMLElement;\n   // Error: 'Event' 和 'HTMLElement'\n    中的任何一个都不能赋值给另外一个\n}\n")])])]),n("p",[t._v("如果你仍然想使用那个类型，你可以使用双重断言。首先断言成兼容所有类型的any")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function handler(event: Event) {\n   const element = (event as any) as HTMLElement;\n    // 正常\n}\n")])])]),n("h1",{attrs:{id:"巧用-typescript-支持的-js-最新特性优化代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#巧用-typescript-支持的-js-最新特性优化代码"}},[t._v("#")]),t._v(" 巧用 typescript 支持的 js 最新特性优化代码")]),t._v(" "),n("h2",{attrs:{id:"_1-可选链-optional-chining"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-可选链-optional-chining"}},[t._v("#")]),t._v(" 1. 可选链 Optional Chining")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let x = foo?.bar.baz();\n\n\ntypescript 中的实现如下:\nvar _a;\nlet x = (_a = foo) === null ||\n_a === void 0 ? void 0 : _a.bar.baz();\n\n利用这个特性, 我们可以省去写很多恶心的 a && a.b && a.b.c 这样的代码\n\n")])])]),n("h2",{attrs:{id:"_2-空值联合-nullish-coalescing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-空值联合-nullish-coalescing"}},[t._v("#")]),t._v(" 2. 空值联合 Nullish Coalescing")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let x = foo ?? '22';\n\n\ntypescript 中的实现如下:\n\nlet x = (foo !== null && foo !== void 0 ?\nfoo : '22');\n")])])]),n("h1",{attrs:{id:"巧用高级类型灵活处理数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#巧用高级类型灵活处理数据"}},[t._v("#")]),t._v(" 巧用高级类型灵活处理数据")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Partial<T>   类型T的所有子集(每个属性都是可选的)\nReadonly<T>  返回一个跟T一样的类型, 但会将所有的属性都设置为readonly\nRequired<T> 但会一个跟T一样的类型 但会将所有的属性都设置为required\nPick<T, K> 从类型T中挑选部分属性K而构造出来的新类型\nExclude<T, U> 从类型T中移除部分属性U而构造出来的新类型\nExtract<T, U> 提取联合类型T中所有可以被数值给类型U的部分\nNonNullable<T> 从联合类型T中移除null 和undefined而构造出来的新类型\nRerureType<T> 表示函数类型T的返回值类型\n")])])]),n("p",[t._v("类型索引\n为了实现上面的工具函数, 我们需要先了解以下几个语法:\nkeyof : 获取类型上的 key 值\nextends : 泛型里面的约束\nT[K] : 获取对象 T 相应 K 的元素类型")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type Partial<T> = {\n   [P in keyof T]?: T[P]\n}\n")])])]),n("p",[t._v("Record 作为一个特别灵活的工具. 第一个泛型传入对象的key值, 第二个传入 对象的属性值.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type Record<K extends string, T> = {\n   [P in K]: T;\n}\n\n")])])]),n("p",[t._v("我们看一下下面的这个对象, 你会怎么用 ts 声明它?")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const AnimalMap = {\n   cat: { name: '猫', title: 'cat' },\n   dog: { name: '狗', title: 'dog' },\n   frog: { name: '蛙', title: 'wa' },\n};\n")])])]),n("p",[t._v("此时用 Record 即可.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type AnimalType = 'cat' | 'dog' | 'frog';\n\ninterface AnimalDescription {\nname: string, title: string\n}\n\nconst AnimalMap:Record<AnimalType, AnimalDescription> = {\n   cat: { name: '猫', title: 'cat' },\n   dog: { name: '狗', title: 'dog' },\n   frog: { name: '蛙', title: 'wa' },\n};\n")])])]),n("p",[t._v("type 和 interface 区别")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type 只能通过&进行合并   更强大\ninterface 同名自动合并,通过extends扩展 只能表达object/class/function\n\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\n\n")])])]),n("p",[t._v("常用的 declare")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("shims-tsx.d.ts， 在全局变量 global中批量命名了数个内部模块。\nshims-vue.d.ts，意思是告诉 TypeScript *.vue 后缀的文件可以交给 vue 模块来处理。\n\ndeclare\nvar\n\n声明全局变量\ndeclare\nfunction\n\n声明全局方法\ndeclare\nclass\n\n声明全局类\ndeclare\nenum\n\n声明全局枚举类型\ndeclare\nglobal\n\n扩展全局变量\ndeclare\nmodule\n\n扩展模块\n")])])]),n("p",[t._v("https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651557265&idx=1&sn=cfab9a1c5fa6b8b8c365144a2a73907d&chksm=80255a50b752d346d96f7911c00962099b0daee885306bfa1fdc62b2821302a0e070db97c863&scene=21#wechat_redirect")])])}),[],!1,null,null,null);a.default=e.exports}}]);