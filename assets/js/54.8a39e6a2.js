(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{594:function(e,t,n){"use strict";n.r(t);var a=n(12),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6844904122747977741#heading-18",target:"_blank",rel:"noopener noreferrer"}},[e._v("常见问题"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"ios-上拉边界下拉出现空白"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-上拉边界下拉出现空白"}},[e._v("#")]),e._v(" iOS 上拉边界下拉出现空白")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("document.body.addEventListener(\n  'touchmove',\n  function(e) {\n    if (e._isScroller) return\n    // 阻止默认事件\n    e.preventDefault()\n  },\n  {\n    passive: false\n  }\n)\n")])])]),n("h2",{attrs:{id:"ios-日期转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-日期转换"}},[e._v("#")]),e._v(" ios 日期转换")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("'yyyy-MM-dd'.replace(/-/g, '/')\n")])])]),n("h2",{attrs:{id:"dom-操作引起的卡顿"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom-操作引起的卡顿"}},[e._v("#")]),e._v(" dom 操作引起的卡顿")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1. 合并多次操作为单次操作\nelement.style.borderColor = '#f00';\nelement.style.borderStyle = 'solid';\nelement.style.borderWidth = '1px';\n\n=> \n\n// 优化方案1\nelement.style.cssText += 'border: 1px solid #f00;';\n// 优化方案2\nelement.className += 'empty';\n\n2. 把dom元素离线或者隐藏后修改\n\t1) 使用文档片段\n\tvar fragment = document.createDocumentFragment();\n\t// 一些基于fragment的大量DOM操作\n\t...\n\tdocument.getElementById('myElement').appendChild(fragment); \n\n\t2) 通过设置DOM元素的display样式为none来隐藏元素\n\n\tvar myElement = document.getElementById('myElement');\n\tmyElement.style.display = 'none';\n\t// 一些基于myElement的大量DOM操作\n\t...\n\tmyElement.style.display = 'block';\n\n\t3）克隆DOM元素到内存中 \n\tvar old = document.getElementById('myElement');\n\tvar clone = old.cloneNode(true);\n\t// 一些基于clone的大量DOM操作\n\t...\n\told.parentNode.replaceChild(clone, old); \n\n3. DOM元素的position属性为fixed或absolute \n4. 缓存获取dom元素布局信息\n5. 事件委托\n\te.target && e.target.nodeName.toUpperCase \n\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);