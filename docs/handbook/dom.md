# dom操作

## document
|属性| 说明|
|----|----|
|documentElement|html标签|
|body| body标签|
|head[兼容性不够]| head标签|
|URL| 当前页url|
|referrer| 来源页url|
|domain[可修改]| 页面域名|
|images| 所有图片集合|
|cookie| cookie信息|
|title| 页面标题|
|activeElement| 当前焦点元素|
|documentMode| 文档模式|
|readyState| 文档状态|
|doctype| 文档类型声明|
|scripts| 脚本集合|
|forms| form标签集合|
|children| 元素类型的子节点集合|
|defaultView| document关联的window对象|


|方法| 说明|
|----|----|
|getElementById()|返回对应id的元素|
|getElementsByName()| 返回对应名称元素集合|
|getElementsByTagName()| 返回对应标签名元素集合|
|getElementsByClassName()| 返回指定类名的元素集合|
|querySelector()| 返回符合选择器的第一个元素|
|querySelectorAll()| 返回符合选择器的元素集合|
|createElement()| 创建元素节点|
|createTextNode()| 创建文本节点|
|createAttribute()| 创建属性节点|
|createComment()| 创建注释节点|
|createDocumentFragment()| 创建空的 DocumentFragment 对象|
|matchesSelector()[兼容性不够，需要前缀]| 该选择器是否符合元素匹配|
|write()[输出后光标不换行]| 文档文本写入|
|writeIn()[输出后光标换行]| 文档文本写入|
|implementation.hasFeature(特性,版本)| 特性监测|


## 创建节点
```javascript
document.createElement('div')
document.createTextNode('hello world')

//创建文档对象变量，主要用来临时存储节点，大量操纵dom时性能会有很大的提升
document.createDocumentFragment() 

// false只复制节点本身,不克隆里面的子节点
// true 复制本身以及里面所有的子节点
node.cloneNode()

```

## 操作节点
```javascript
node.appendChild(newNode);// 在指定元素后面新增子节点
// //在parentNode的子节点referenceNode前面插入newNode节点, referenceNode 为 null 则 newNode 将被插入到子节点的末尾
parentNode.insertBefore(newNode, referenceNode);  
parentNode.replaceChild(newNode, oldNode);//用newNode节点替换parentNode的子节点oldNode

// 替换节点
parentNode.replace(newNode, targetNode);        //使用newNode替换targetNode

// 删：
parentNode.removeChild(childNode);   // 移除目标节点
node.parentNode.removeChild(node);       //在不清楚父节点的情况下使

// 可以实现多位置插入，你可以在父节点上执行插入或在兄弟节点上执行插入。
parentNode.prepend(...nodes or strings)。在第一个子节点之前插入。
parentNode.append(...nodes or strings)。在最后一个子节点之后插入。
nextSibling.before(...nodes or strings)。在本节点之前同级插入。
previousSibling.after(...nodes or strings)。在本节点之后同级插入。


/*插入html代码*/
node.insertAdjacentHTML('beforeBegin', html);   //在该元素本身的前面。
node.insertAdjacentHTML('afterBegin', html);   //只在该元素当中，在该元素第一个子孩子前面
node.insertAdjacentHTML('beforeEnd', html);   // 只在该元素当中，在该元素最后一个子孩子后面
node.insertAdjacentHTML('afterEnd', html);   //在该元素本身的后面

insertAdjacentText // 文本插入
insertAdjacentElement // 元素插入
```

## 查找节点
```javascript

element.parentNode    //返回该节点的父节点，每个节点都会有一个父节点，Element的父节点可能是Element，Document或DocumentFragment；
element.parentElement    //返回父节点，只有父节点为元素节点时返回，否则返回null

Node.ownerDocument   //返回祖先节点（整个document）
 
element.children    //返回所有元素子节点的集合，仅包含元素节点
element.childNodes    //返回当前元素所有的子节点，包含元素节点，文本节点，属性节点。（注释、空格、换行等也会被当作一个节点）
 
element.firstChild    //返回当前元素的第一个子节点，该子节点可以是任意节点，如果没有则返回null
element.firstElementChild    //返回当前元素的第一个子节点，该子节点只可以是元素节点，如果没有则返回null
element.lastChild    //返回当前元素的最后一个子节点，该子节点可以是任意节点，如果没有则返回null
element.lastElementChild    //返回当前元素的最后一个子节点，该子节点只可以是元素节点，如果没有则返回null
 
element.previousSibling    //返回该节点的前一个兄弟节点
element.previousElementSibling    //返回该节点的前一个元素兄弟节点
element.nextSibling    //返回该节点的后一个兄弟节点
element.nextElementSibling    //返回该节点的后一个元素兄弟节点

```

## 设置内容
```javascript
element.innerHTML
element.innerText

ele.id='div';
ele.style='color:red';
ele.textContent='新创建的节点';

```
## attribute

### 属性

|属性| 说明|
|----|----|
|name|	属性名|
|value|	属性值|
|isId	|是否为id类型|
|specified	|属性是否被指定|
|length|	属性长度|
|attributes|	属性集合|

### 方法
|方法| 说明|
|----|----|
|getAttribute()|获取属性值|
|getAttributeNode()|获取属性节点|
|setAttribute()|设置属性值|
|setAttributeNode()| 设置属性节点|
|removeAttribute()|删除属性|
|removeAttributeNode()[ie不支持]| 删除属性节点|
|hasAttribute()|是否存在指定的属性|
|hasAttributes()|是否存在属性|


## 获取属性

### className
```javascript

var node =document.getElementById("list");
// classList方法操作元素的class属性
node.classList.add("test"); //给node节点添加一个class
node.classList.remove("test");//删除node节点名为test的class
node.classList.replace("old-class","new-class");//替换node节点的class

var hasClass = node.classList.contains("test");//node节点是否存在给定的class，如果存在则返回 true，否则返回 false。
node.classList.toggle("test")//如果节点已经存在给定的class则删除，如果没有则添加

```

### style设置
```javascript
node.style.color = 'red';   //设置color样式
node.style.setProperty('font-size', '16px');  //设置font-size样式
node.style.removeProperty('color');  //移除color属性

```

### data-
```javascript
// dataset方法获取元素的data- 属性值
var dataId=node.dataset.id; //获取node节点的data-id属性值
var dataName=node.dataset.userName;//类似data-user-name属性必须使用驼峰式来访问
'id' in node.dataset     // 判断node节点是否有data-id属性
```

### 样式 class 设置
```javascript
element.style
element.className

//getComputedStyle是window的方法。它能够获取当前元素所有最终使用的CSS属性值，但是是只读的。
//它有两个参数，第一个为传入的节点，第二个可以传入:hover, :blur等获取其伪类样式，如果没有则传入null。

// 然而IE并不支持getComputedStyle方法，可以使用currentStyle来保持兼容性：
window.getComputedStyle ? window.getComputedStyle(node, null) : node.currentStyle

// 返回元素的大小以及相对于视口的位置。返回一个DOMRect对象。包括元素的 left right top bottom width height x y 属性值。
elem.getBoundingClientRect()

```

## Text类型
|方法 | 说明 |
|----|----|
|appendData(文本) | 将text添加到节点的末尾|
| deleteData(位置,数量) | 从指定位置开始删除n个字符|
| insertData(位置,文本) | 从指定位置插入文本|
| replaceData(位置,数量,文本) | 用text替换从offset位置开始到offset+count为止处的文本|
| splitText(位置) | 从指定位置将当前文本节点分裂成两个文本节点|
| substringData(位置,数量) | 截取从offset位置开始到offset+count为止处的字符串|
| normalize() | 合并相邻文本节点，并删除空的文本节点|


## Element
|属性 | 说明 |
|----|----|
|id|id|
|className| 类名|
|title| 标题|
|style| 设置或返回元素的样式属性|
|innerHTML| 设置或者返回元素的内容|
|outerHTML[包含自身]| 设置或者返回元素的内容|
|textContent[ie-innerText]| 设置或返回文本内容|
|contentEditable| 设置或返回元素的可编辑状态|
|isContentEditable| 是否可编辑|
|childElementCount| 子元素节点个数|
|firstElementChild| 第一个元素节点|
|lastElementChild| 最后一个元素节点|
|previousElementSibling| 上一个元素节点|
|nextElementSibling| 下一个元素节点|


|方法 | 说明 | 返回|
|----|----|----|
|focus()|设置焦点||
|blur()|失去焦点||
|appendChild(节点)| 在子节点列表之后插入| 新增节点|
|insertBefore(节点,参照节点)| 在参照节点之前插入节点| 插入节点|
|removeChild(节点)| 节点删除| 被删节点|
|replaceChild(节点,被替换的节点)| 节点替换| 被替换节点|
|cloneNode(布尔值)| 复制节点| 克隆节点|
|importNode(节点,布尔值)| 从A文档中取得a节点，将其导入B文档(类似cloneNode方法)||
|contains(节点)| 该节点是否为调用节点的子级| 布尔值|
|hasFocus()| 是否获得了焦点| 布尔值|
|hasChildNodes()| 是否存在子节点| 布尔值|
|isDefaultNamespace(url)| 是否指定了名称空间| 布尔值|
|isEqualNode(节点)| 两个元素是否相等| 布尔值|
|isSupported(特性，版本)| 是否支持某特性| 布尔值|


## nodeType
|值 | 说明 |
|----|----|
|1| 元素节点|
|2| 属性节点 |
|3| 文本节点|
|8| 注释节点|
|9| 文档节点|
|4| CDATA节点 |
|5| 实体引用名称节点 |
|6| 实体名称节点|
|7| 处理指令节点  |
|10| 文档类型节点 |
|11| 文档片段节点 |
|12 |DTD声明节|

```javascript

element.classList	返回元素的类名，作为 DOMTokenList 对象。
element.className	设置或返回元素的class属性

element.compareDocumentPosition()	比较两个元素的文档位置。
element.contentEditable	设置或返回元素的内容是否可编辑

element.hasAttribute()	如果元素中存在指定的属性返回 true，否则返回false。
element.hasAttributes()	如果元素有任何属性返回true，否则返回false。
element.hasChildNodes()	返回一个元素是否具有任何子元素



element.offsetParent	返回元素的偏移容器

```

## 页面高度
|方法 | 说明 |
|----|----|
|offsetParent |	偏移的父容器|
|element.clientHeight |	在页面上返回内容的可视高度（不包括边框，边距或滚动条）|
|element.clientWidth	|在页面上返回内容的可视宽度（不包括边框，边距或滚动条）|
|element.offsetHeight|	返回，任何一个元素的高度包括边框和填充，但不是边距|
|element.offsetWidth|	返回元素的宽度，包括边框和填充，但不是边距|
|element.offsetLeft|	返回当前元素的相对水平偏移位置的偏移容器|
|element.offsetTop	|返回当前元素的相对垂直偏移位置的偏移容器|
|element.scrollHeight|	返回整个元素的高度（包括带滚动条的隐蔽的地方）|
|element.scrollLeft	|返回当前视图中的实际元素的左边缘和左边缘之间的距离|
|element.scrollTop	|返回当前视图中的实际元素的顶部边缘和顶部边缘之间的距离|
|element.scrollWidth	|返回元素的整个宽度（包括带滚动条的隐蔽的地方）|


|方法 | 说明 |
|----|----|
|element.nodeType|	返回元素的节点类型|
|element.nodeValue|	返回元素的节点值|
| |元素节点的 nodeValue 是 undefined 或 null|
| |文本节点的 nodeValue 是文本自身|
| |属性节点的 nodeValue 是属性的值|
|element.nodeName |   返回给定节点的名字|
| |   元素节点的 nodeName 与标签名相同|
||属性节点的 nodeName 是属性的名称|
||文本节点的 nodeName 永远是 #text|
   ||文档节点的 nodeName 永远是 #document|


## table
|属性方法| 说明|
|----|----|
|caption| caption元素指针|
|tBodies| tbody集合|
|tFoot| tfoot集合|
|tHead| thead元素|
|rows| 表格所有行集合|
|createTHead()| 创建|
|createTFoot()| 创建|
|createCaption()| 创建caption元素，将其放到表格中，返回引用|
|deleteTHead()| 删除thead元素|
|deleteTFoot()| 删除tfoot元素|
|deleteCaption()| 删除caption元素|
|deleteRow(pos)| 删除指定位置的行|
|insertRow(pos)| 向行集合中的指定位置插入一行|

### tbody元素
|属性方法| 说明|
|----|----|
|rows| tbody所有行集合|
|deleteRow(pos)| 删除指定位置的行|
|insertRow(pos)| 向行集合中的指定位置插入一行，返回引用|


### tr元素

|属性方法| 说明|
|----|----|
|cells| tr所有单元格集合|
deleteCell(pos)| 删除指定位置的单元格|
|insertCell(pos)| 向单元格集合中的指定位置插入一个单元格，返回引用|


## 访问元素样式
|属性方法(dom.style)| 说明|
|----|----|
|cssText| 返回style特性中所有样式的字符串形式|
|length| 返回元素中CSS属性数量|
|parentRule| 返回CSS信息的CSSRule对象|
|getPropertyCSSValue(name)| 返回属性值的CSSValue对象(包含cssText和cssValueType)|
|getPropertyPriority(name)| 是否使用了!important属性|
|getPropertyValue(name)| 返回给定属性的字符串值|
|removeProperty(name)| 从样式中删除给定属性|
|setProperty(name,value,优先级)| 将给定属性设置为相应的值并加上优先级|

## 操作样式表

document.styleSheets[n].cssRules/rules下

|属性 |	说明|
|----|----|
|cssText[ie不支持]	|整条样式规则的字符串|
|selectorText	|样式选择符|
|style|	具体样式对象|
