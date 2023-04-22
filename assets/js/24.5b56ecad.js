(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{563:function(n,e,r){"use strict";r.r(e);var t=r(12),s=Object(t.a)({},(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("p",[n._v("https://segmentfault.com/a/1190000039694578")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("// new promise 会直接执行 函数\nnew Promise(function() {})\nthen方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的\n.then().then()\n.then(() => {}, () => {})\n\n如果异步操作抛出错误，状态就会变为rejected，就会调用catch()方法指定的回调函数，处理这个错误。\n另外，then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获\n\n☆ Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。\n☆\n一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。\n\n☆ Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”\n\n☆ catch()方法返回的还是一个 Promise 对象，因此后面还可以接着调用then()方法\n\nfinally 都会执行\n\n\nPromise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。\n\nconst p = Promise.all([p1, p2, p3]);\np的状态由p1、p2、p3决定，分成两种情况。\n\n（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。\n\n（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。\n\n☆ 注意，如果作为参数的 Promise 实例，自己定义了catch方法，\n  那么它一旦被rejected，并不会触发Promise.all()的catch方法。\n\n\nPromise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。\nconst p = Promise.race([p1, p2, p3]);\n只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数\n\n\nPromise.allSettled()\n只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束\n\nPromise.any()\n只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，\n包装实例就会变成rejected状态。\n\nPromise.resolve()\n有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。\n\nconst jsPromise = Promise.resolve($.ajax('/whatever.json'));\n\nPromise.reject(reason)\n方法也会返回一个新的 Promise 实例，该实例的状态为rejected。\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("const promise = new Promise(function(resolve, reject) {\n  throw new Error('test');\n  // try catch\n  // reject(new Error('test))\n});\npromise.catch(function(error) {\n  console.log(error);\n});\n// Error: test\n\n等同于下面两种写法\n1.\nconst promise = new Promise(function(resolve, reject) {\n  try {\n    throw new Error('test');\n  } catch(e) {\n    reject(e);\n  }\n});\npromise.catch(function(error) {\n  console.log(error);\n});\n\n2.\nconst promise = new Promise(function(resolve, reject) {\n  reject(new Error('test'));\n});\npromise.catch(function(error) {\n  console.log(error);\n});\n\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("\nPromise.prototype.finally = function (callback) {\n  let P = this.constructor;\n  return this.then(\n    value  => {\n      return P\n            .resolve(callback())\n            .then(() => {\n              return value\n            })\n    },\n    reason => {\n      return P\n            .resolve(callback())\n            .then(() => {\n              throw reason\n            })\n    }\n  );\n};\n\npromise\n.finally(() => {\n  // 语句\n});\n\n// 等同于\npromise\n.then(\n  result => {\n    // 语句\n    return result;\n  },\n  error => {\n    // 语句\n    throw error;\n  }\n);\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("p\n.then((val) => {\n  console.log('fulfilled:', val)\n})\n.catch((err) => {\n  console.log('rejected', err)\n});\n\n// 等同于\np\n.then((val) => {\n  console.log('fulfilled:', val)\n})\n.then(\n  null,\n  (err) => {\n    console.log(\"rejected:\", err)\n  });\n")])])]),r("h2",{attrs:{id:"异步加载图片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步加载图片"}},[n._v("#")]),n._v(" 异步加载图片")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("function loadImageAsync(url) {\n  return new Promise(function(resolve, reject) {\n    const image = new Image();\n\n    image.onload = function() {\n      resolve(image);\n    };\n\n    image.onerror = function() {\n      reject(new Error('Could not load image at ' + url));\n    };\n\n    image.src = url;\n  });\n}\n\n")])])]),r("h2",{attrs:{id:"promise-实现ajax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise-实现ajax"}},[n._v("#")]),n._v(" promise 实现ajax")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('const getJSON = function(url) {\n  const promise = new Promise(function(resolve, reject){\n    const handler = function() {\n      if (this.readyState !== 4) {\n        return;\n      }\n      if (this.status === 200) {\n        resolve(this.response);\n      } else {\n        reject(new Error(this.statusText));\n      }\n    };\n    const client = new XMLHttpRequest();\n    client.open("GET", url);\n    client.onreadystatechange = handler;\n    client.responseType = "json";\n    client.setRequestHeader("Accept", "application/json");\n    client.send();\n\n  });\n\n  return promise;\n};\n\ngetJSON("/posts.json").then(function(json) {\n  console.log(\'Contents: \' + json);\n}, function(error) {\n  console.error(\'出错了\', error);\n});\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);