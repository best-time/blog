(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{602:function(e,t,a){"use strict";a.r(t);var r=a(12),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[e._v("#")]),e._v(" Vue")]),e._v(" "),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[e._v("#")]),e._v(" 生命周期")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("\n\t挂载阶段"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" beforeCreate created beforeMounted mounted\n\t更新阶段"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" beforeUpdate updated\n\t销毁阶段"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" beforeDestory destoryed\n\n  init Events and lifecycle\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("beforeCreate\n  init injections and reactivity\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("created\n  el "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v("\n  template "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v("\n  render  or compile html\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("beforeMounted\n  create vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("$el and replace el "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("with")]),e._v(" it\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("mounted\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("beforeUpdate\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("updated\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("beforeDestory\n  teardown watchers child components and listeners\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("destoryed\n\n\n各个阶段做什么\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("created：\n在Vue实例创建完毕状态，我们可以去访问data、computed、watch、methods上的方法和数据，但现在还没有将虚拟Dom挂载到真实Dom上，\n所以我们在此时访问不到我们的Dom元素（el属性，ref属性此时都为空）。\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("beforeMount： 它是在挂载之前被调用的，会在此时去找到虚拟Dom，并将其编译成Render\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("mounted： 虚拟Dom已经被挂载到真实Dom上，此时我们可以获取Dom节点，$ref在此时也是可以访问的。\n\n")])])]),a("h2",{attrs:{id:"父子组件生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父子组件生命周期"}},[e._v("#")]),e._v(" 父子组件生命周期")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("挂载阶段：父组件 beforeMount -> 子组件 created -> 子组件 mounted -> 父组件 mounted\n更新阶段：父组件 beforeUpdate -> 子组件 beforeUpdate -> 子组件 updated -> 父组件 updated\n销毁阶段：父组件 beforeDestroy -> 子组件 beforeDestroy -> 子组件 destroyed -> 父组件 destroyed\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);