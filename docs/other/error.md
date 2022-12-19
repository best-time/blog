## 异常类型

## SyntaxError：语法异常
- SyntaxError:Unexpected token u in JSON at position 0
- SyntaxError:Unexpected token '<'
- SyntaxError:Unexpected identifier

## ReferenceError：引用异常
- ReferenceError:$ is not defined
- ReferenceError:Can't find variable: $
-
## RangeError：范围异常
- new Array(-20) 会导致 RangeError: Invalid array length
- 递归等消耗内存的程序会导致 RangeError: Maximum call stack size exceeded
-
## Error：异常基类
- Error.prototype.message 错误消息。对于用户创建的 Error 对象，这是构造函数的第一个参数提供的字符串。
- Error.prototype.name 错误名称。这是由构造函数决定的。
- Error.prototype.stack 错误堆栈

## InternalError：内部异常
- “too many switch cases”（过多 case 子句）；
- “too many parentheses in regular expression”（正则表达式中括号过多）；
- “array initializer too large”（数组初始化器过大）；

## TypeError: 类型异常
- TypeError:Cannot read property 'length' of undefined

## EvalError: Eval 方法异常

- 在 eval() 方法执行过程中抛出 EvalError 异常。

## URIError: URI 相关方法产生的异常
decodeURI, decodeURIComponent, encodeURI, encodeURIComponent 这四个方法会产生这种异常；

比如执行 decodeURI('%%') 的异常：Uncaught URIError: URI malformed


## 异常监控

- window.onerror 捕获语法异常
- 可以重写 setTimeout、setInterval 等异步方法，用同步的写法包裹 try 来捕获异步函数中发生的错误
- window.addEventListener (‘unhandledrejection’,・・・); 捕获未处理的异步 reject
- window.addEventListener (‘error’, …) 捕获资源异常
- 重写 fetch, XMLHttpRequest 来捕获接口状态
