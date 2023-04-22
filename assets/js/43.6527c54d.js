(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{584:function(n,e,t){"use strict";t.r(e);var a=t(12),r=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"javascript垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript垃圾回收机制"}},[n._v("#")]),n._v(" JavaScript垃圾回收机制")]),n._v(" "),t("p",[n._v("标记清除（ mark and sweep）")]),n._v(" "),t("p",[n._v("这是 JavaScript最常见的垃圾回收方式。当变量进入执行环境的时候，比如在函数中声明一个变量，垃圾回收器将其标记为“进入环境”。\n当变量离开环境的时候（函数执行结束），将其标记为“离开环境”。")]),n._v(" "),t("p",[n._v("垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量，以及被环境中变量所引用的变量（闭包）的标记。\n在完成这些之后仍然存在的标记就是要删除的变量。")]),n._v(" "),t("p",[n._v("引用计数（ reference counting）")]),n._v(" "),t("p",[n._v("在低版本的E中经常会发生内存泄漏，很多时候就是因为它采用引用计数的方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数。")]),n._v(" "),t("p",[n._v("当声明了一个变量并将个引用类型赋值给该变量的时候，这个值的引用次数就加1.如果该变量的值变成了另外一个，则这个值的引用次数减1.当这个值的引用次数变为0的时候，说明没有变量在使用，这个值没法被访问。")]),n._v(" "),t("p",[n._v("因此，可以将它占用的空间回收，这样垃圾回收器会在运行的时候清理引用次数为0的值占用的空间在正中虽然 JavaScript对象通过标记清除的方式进行垃圾回收，但是BOM与DOM对象是用引用计数的方式回收垃圾的。")]),n._v(" "),t("p",[n._v("也就是说，只要涉及BOM和DOM，就会出现循环引用问题")]),n._v(" "),t("h2",{attrs:{id:"script标签中-defer和-async属性的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#script标签中-defer和-async属性的区别"}},[n._v("#")]),n._v(" script标签中 defer和 async属性的区别")]),n._v(" "),t("p",[n._v("（1） defer属性规定是否延迟执行脚本，直到页面加载为止， async属性规定脚本一旦可用，就异步执行。\n（2） defer并行加载 JavaScript文件，会按照页面上 script标签的顺序执行，\nasync并行加载 JavaScript文件，下载完成立即执行，不会按照页面上 script标签的顺序执行。")]),n._v(" "),t("h2",{attrs:{id:"在dom操作中怎样创建、添加、移除、替换、插入和查找节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在dom操作中怎样创建、添加、移除、替换、插入和查找节点"}},[n._v("#")]),n._v(" 在DOM操作中怎样创建、添加、移除、替换、插入和查找节点")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1）通过以下代码创建新节点。\n\ncreateDocumentFragment ()\n//创建一个D0M片段\n\ncreateElement ()\n//创建一个具体的元素\n\ncreateTextNode ()\n//创建一个文本节点\n\n\n（2）通过以下代码添加、移除、替换、插入节点\n\nappendchild()\nremovechild()\nreplacechild ()\ninsertBefore ()\n//并没有 insertAfter（）\n（3）通过以下代码查找节点。\ngetElementsByTagName ()\n//通过标签名称查找节点\ngetElementsByName ()\n//通过元素的name属性的值查找节点（IE容错能力较强，会得到一个数//组，其中包括id等于name值的节点）\ngetElementById()\n//通过元素Id查找节点，具有唯一性\n")])])]),t("h2",{attrs:{id:"new操作符的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new操作符的作用"}},[n._v("#")]),n._v(" new操作符的作用")]),n._v(" "),t("p",[n._v("（1）创建一个空对象。\n（2）由this变量引用该对象\n（3）该对象继承该函数的原型（更改原型链的指向）\n（4）把属性和方法加入到this引用的对象中。\n（5）新创建的对象由this引用，最后隐式地返回this")]),n._v(" "),t("h2",{attrs:{id:"对象属性类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象属性类型"}},[n._v("#")]),n._v(" 对象属性类型")]),n._v(" "),t("p",[n._v("Configurable: 表示是否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。默认值是true")]),n._v(" "),t("p",[n._v("Enumerable: 表示能否通过for-in循环返回属性。默认值是true")]),n._v(" "),t("p",[n._v("Writable: 表述能否修改属性。默认值是true")]),n._v(" "),t("p",[n._v("Value: 包含这个属性的数据值。默认值是true")]),n._v(" "),t("h2",{attrs:{id:"跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[n._v("#")]),n._v(" 跨域")]),n._v(" "),t("p",[n._v("1. jsonp: 需要服务器配合一个callback函数\n　2. CORS: 需要服务器设置header ：Access-Control-Allow-Origin\n　3. window.name + iframe: 需要目标服务器响应window.name。\n　4. document.domain : 仅限主域相同，子域不同的跨域应用场景。(原理: 两个页面都通过js强制设置document.domain为基础主域，就实现了同域)\n　5. html5的 postMessage + iframe: 需要服务器或者目标页面写一个postMessage，主要侧重于前端通讯。\n　6. nginx反向代理: 不用服务器配合，需要搭建一个中转nginx服务器，用于转发请求。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// jsonp\n\n<script>\n    var script = document.createElement('script');\n    script.type = 'text/javascript';\n\n    // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数\n    script.src = 'http://xxxxxxx:8080/login?callback=handleCallback';\n    document.head.appendChild(script);\n\n    function handleCallback(res) {\n        alert(JSON.stringify(res));\n    }\n<\/script>\n\n<?php\n  $callback = $_GET['callback'];//得到回调函数名\n  $data = array('a','b','c');//要返回的数据\n  echo $callback.'('.json_encode($data).')';//输出\n?>\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('在父页面 http://xxx.com/a.html 中设置document.domain\n\n<iframe id = "iframe" src="http://xxx.com/b.html" onload = "test()"></iframe>\n<script type="text/javascript">\n    document.domain = \'xxx.com\';//设置成主域\n    function test(){\n       alert(document.getElementById(\'￼iframe\').contentWindow);\n       //contentWindow 可取得子窗口的 window 对象\n    }\n<\/script>\n\n在子页面http://xxx.com/b.html 中设置document.domain\n\n<script type="text/javascript">\n    document.domain = \'xxx.com\';\n    //在iframe载入这个页面也设置document.domain，使之与主页面的document.domain相同\n<\/script>\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("postMessage(data, origin)方法接受两个参数：\n\ndata：html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。\n\norigin：协议+主机+端口号，也可以设置为\"*\"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为\"/\"。\n\n栗子：\n假如有一个页面，页面中拿到部分用户信息，点击进入另外一个页面，另外的页面默认是取不到用户信息的，你可以通过window.postMessage把部分用户信息传到这个页面中。（需要考虑安全性等方面。）\n\n发送消息：\n\n// 弹出一个新窗口\nvar domain = 'http://haorooms.com';\nvar myPopup = window.open(`${domain}/windowPostMessageListener.html`,'myWindow');\n\n// 发送消息\nsetTimeout(function(){\n  var message = {name:\"站点\",sex:\"男\"};\n  console.log('传递的数据是  ' + message);\n  myPopup.postMessage(message, domain);\n}, 1000);\n\n\n接收消息：\n\n// 监听消息反馈\nwindow.addEventListener('message', function(event) {\n  // 判断域名是否正确\n  if (event.origin !== 'http://haorooms.com') return;\n  console.log('received response: ', event.data);\n}, false);\n\n\n\n使用iframe，代码应该这样写：\n\n// 捕获iframe\nvar domain = 'http://haorooms.com';\nvar iframe = document.getElementById('myIFrame').contentWindow;\n\n// 发送消息\nsetTimeout(function(){\n    var message = {name:\"站点\",sex:\"男\"};\n    console.log('传递的数据是:  ' + message);\n    iframe.postMessage(message, domain);\n},1000);\n接收数据并反馈信息：\n\n// 响应事件\nwindow.addEventListener('message',function(event) {\n    if(event.origin !== 'http://haorooms.com') return;\n    console.log('message received:  ' + event.data, event);\n    event.source.postMessage(event.origin);\n}, false);\n\n\nsource – 消息源，消息的发送窗口/iframe。\norigin – 消息源的URI(可能包含协议、域名和端口)，用来验证数据源。\ndata – 发送方发送给接收方的数据。\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("window.name\n\n原理：\nwindow对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的。\n\n栗子：\n在子页面(b.com/data.html) 设置window.name：\n\n/* b.com/data.html */\n<script type=\"text/javascript\">\n   window.name = 'I was there!';\n   // 这里是要传输的数据，大小一般为2M，IE和firefox下可以大至32M左右\n   // 数据格式可以自定义，如json、字符串\n<\/script>\n在父页面（a.com/app.html）中创建一个iframe，把其src指向子页面。在父页面监听iframe的onload事件，获取子页面数据：\n\n/* a.com/app.html */\n<script type=\"text/javascript\">\n    var iframe = document.createElement('iframe');\n    iframe.src = 'http://b.com/data.html';\n    function iframelLoadFn() {\n      var data = iframe.contentWindow.name;\n      console.log(data);\n      // 获取数据以后销毁iframe，释放内存；这也保证了安全（不被其他域frame js访问）。\n      iframeDestoryFn();\n    }\n\n    function iframeDestoryFn() {\n      iframe.contentWindow.document.write('');\n      iframe.contentWindow.close();\n      document.body.removeChild(iframe);\n    }\n\n    if (iframe.attachEvent) {\n        iframe.attachEvent('onload', iframelLoadFn);\n    } else {\n        iframe.onload = iframelLoadFn;\n    }\n    document.body.appendChild(iframe);\n<\/script>\n")])])]),t("h2",{attrs:{id:"ajax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[n._v("#")]),n._v(" ajax")]),n._v(" "),t("p",[n._v("all.js")]),n._v(" "),t("h2",{attrs:{id:"iterator-generator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iterator-generator"}},[n._v("#")]),n._v(" Iterator Generator")]),n._v(" "),t("h2",{attrs:{id:"instanceof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instanceof"}},[n._v("#")]),n._v(" instanceof")]),n._v(" "),t("p",[n._v("instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性\nconsole.log(2 instanceof Number);                    // false\nconsole.log(true instanceof Boolean);                // false\nconsole.log('str' instanceof String);                // false")]),n._v(" "),t("h2",{attrs:{id:"null-为什么判断成object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#null-为什么判断成object"}},[n._v("#")]),n._v(" null 为什么判断成object")]),n._v(" "),t("p",[n._v("其实 null 不是对象，虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。\n在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，\n然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。")]),n._v(" "),t("h2",{attrs:{id:"this-call-apply-理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this-call-apply-理解"}},[n._v("#")]),n._v(" this call apply 理解")]),n._v(" "),t("p",[n._v("在浏览器里，在全局范围内this 指向window对象；\n在函数中，this永远指向最后调用他的那个对象；\n构造函数中，this指向new出来的那个新的对象；\ncall、apply、bind中的this被强绑定在指定的那个对象上；\n箭头函数中this比较特殊,箭头函数this为父作用域的this，不是调用时的this.要知道前四种方式,都是调用时确定,也就是动态的,而箭头函数的this指向是静态的,声明的时候就确定了下来；\napply、call、bind都是js给函数内置的一些API，调用他们可以为函数指定this的执行,同时也可以传参。")]),n._v(" "),t("h2",{attrs:{id:"原型-原型链-有什么特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型-原型链-有什么特点"}},[n._v("#")]),n._v(" 原型，原型链？ 有什么特点")]),n._v(" "),t("p",[n._v("在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值是一个对\n象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部\n将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们\n是不应该能够获取到这个值的，但是现在浏览器中都实现了 proto 属性来让我们访问这个属性，但是我们最好不要使用这\n个属性，因为它不是规范中规定的。ES5 中新增了一个 Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对\n象的原型。\n当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又\n会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就\n是我们新建的对象为什么能够使用 toString() 等方法的原因。\n特点：\nJavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与\n之相关的对象也会继承这一改变。")]),n._v(" "),t("p",[n._v("获取原型的方法？\np.proto\np.constructor.prototype\nObject.getPrototypeOf(p)")]),n._v(" "),t("h2",{attrs:{id:"json-parse-json-stringify-obj-实现深拷贝的弊端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-parse-json-stringify-obj-实现深拷贝的弊端"}},[n._v("#")]),n._v(" JSON.parse(JSON.stringify(obj))实现深拷贝的弊端")]),n._v(" "),t("ol",[t("li",[n._v("new Date()时间将只是字符串的形式。而不是时间对象")]),n._v(" "),t("li",[n._v("RegExp、Error对象，则序列化的结果将只得到空对象")]),n._v(" "),t("li",[n._v("函数，undefined，则序列化的结果会把函数或 undefined丢失")]),n._v(" "),t("li",[n._v("NaN、Infinity和-Infinity，则序列化的结果会变成null")]),n._v(" "),t("li",[n._v("只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的，\n则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor")]),n._v(" "),t("li",[n._v("存在循环引用的情况也无法正确实现深拷贝")])]),n._v(" "),t("h2",{attrs:{id:"页面通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面通信"}},[n._v("#")]),n._v(" 页面通信")]),n._v(" "),t("ol",[t("li")]),n._v(" "),t("p",[n._v("window.open() + functionName\nwindow.opener.functionName")]),n._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[n._v("iframe\nparent.window 通过contentWindow，我们可以拿到iframe内部的方法和dom元素，进而可以操控iframe页面\nparent.window拿到父页面的window")])])])}),[],!1,null,null,null);e.default=r.exports}}]);