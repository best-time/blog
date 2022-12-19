## 文档链接
[简易编辑器](http://eux.baidu.com/blog/fe/%e5%88%a9%e7%94%a8-javascript-%e5%ae%9e%e7%8e%b0%e5%af%8c%e6%96%87%e6%9c%ac%e7%bc%96%e8%be%91%e5%99%a8)


## selection
```javascript
{
  anchorNode: text;  // 该选区起点所在的节点
    // 返回一个数字，其表示的是选区起点在 anchorNode 中的位置偏移量。
    // 是文本节点，那么返回的就是从该文字节点的第一个字开始，直到被选中的第一个字之间的字数（如果第一个字就被选中，那么偏移量为零）。
    // 是一个元素，那么返回的就是在选区第一个节点之前的同级节点总数。(这些节点都是 anchorNode 的子节点)
  anchorOffset: 5;  
  
  baseNode: text;
  baseOffset: 5;
  
  extentNode: text;
  extentOffset: 31;
  
  focusNode: text; // 返回该选区终点所在的节点
    //返回一个数字，其表示的是选区终点在 focusNode 中的位置偏移量。
    // 是文本节点，那么选区末尾未被选中的第一个字，在该文字节点中是第几个字（从 0 开始计），就返回它。
    // 是一个元素，那么返回的就是在选区末尾之后第一个节点之前的同级节点总数。
  focusOffset: 31;
  
  isCollapsed: false; // 返回一个布尔值，用于判断选区的起始点和终点是否在同一个位置
  rangeCount: 1; // 返回该选区所包含的连续范围的数量
  type: "Range";
}
```

```javascript
// 可以收起当前选区到一个点。文档不会发生改变。如果选区的内容是可编辑的并且焦点落在上面，则光标会在该处闪烁
Selection.collapse(parentNode, offset)
// 取消当前选区，并把光标定位在原选区的最开始处，如果此时光标所处的位置是可编辑的，且它获得了焦点，则光标会在原地闪烁
Selection.collapseToStart()
// 取消当前选区，并把光标定位在原选区的最末尾处，如果此时光标所处的位置是可编辑的，且它获得了焦点，则光标会在原地闪烁
Selection.collapseToEnd()
// // 移动选中区的焦点到指定的点。选中区的锚点不会移动。选中区将从锚点开始到新的焦点，不管方向。
Selection.extend(node, offset) 
// 指定元素的所有子元素设为选中区域，并取消之前的选中区域
Selection.selectAllChildren()
// 向选区（Selection）中添加一个区域（Range）
Selection.addRange(range)
// 是 Selection 接口用来选中并设置在两个特定的 DOM 节点中 文本选中的范围，并且选中的任何内容都位于两个节点之间
Selection.setBaseAndExtent(anchorNode,anchorOffset,focusNode,focusOffset)
```


### addRange
```javascript
/* 在一个 HTML 文档中选中所有加粗的文本。 */
var strongs = document.getElementsByTagName("strong");
var s = window.getSelection();

if(s.rangeCount > 0) s.removeAllRanges();

for(var i = 0; i < strongs.length; i++) {
  var range = document.createRange();
  range.selectNode(strongs[i]);
  s.addRange(range);
}
```


## range

## range 属性
```javascript
Range.collapsed 只读
// 返回一个表示 Range 的起始位置和终止位置是否相同的布尔值 (en-US)。

Range.commonAncestorContainer 只读
// 返回完整包含 startContainer 和 endContainer 的、最深一级的节点。

Range.endContainer 只读
// 返回包含 Range 终点的节点。

Range.endOffset 只读
// 返回一个表示 Range 终点在 endContainer 中的位置的数字。

Range.startContainer 只读
// 返回包含 Range 开始的节点。

Range.startOffset 只读
// 返回一个数字，表示 Range 在 startContainer 中的起始位置。
```

## range 方法
```javascript
Range.collapse()
// 将 Range 折叠到其边界的端点。

Range.compareBoundaryPoints() (en-US)
// 将该 Range 的边界与另一个 Range 的边界进行比较

Range.compareNode() (en-US) 已弃用 非标准
// 返回一个常量，表示节点是否在 Range 的前、后、中、外。

Range.comparePoint() (en-US)
// 返回 -1、0 或 1，分别表示端点在 Range 之前、内部还是之后。

Range.cloneContents()
// 返回一个复制 Range 中所有节点的文档片段。

Range.cloneRange()
// 返回一个拥有和原 Range 对象相同端点的克隆的 Range 对象。

Range.createContextualFragment()
// 返回从给定的代码字符串创建的文档片段。

Range.deleteContents()
// 从 Document 中移除 Range 内容。

Range.detach() (en-US)
// 将 Range 从使用状态释放，提高性能。

Range.extractContents()
// 将 Range 的内容从文档树移动到一个文档片段。

Range.getBoundingClientRect()
// 返回一个 DOMRect 对象，其绑定了 Range 的整个内容；这将是通过 range.getClientRects() 返回所有边界矩形集合的其中之一。

Range.getClientRects()
// 返回一个 DOMRect 列表对象，该列表汇总了 Range 中所有元素的 Element.getClientRects() 返回结果。

Range.isPointInRange() (en-US)
// 返回一个 boolean，表示给点端点是否在 Range 中。

Range.insertNode()
// 在 Range 开头插入一个节点。

Range.intersectsNode()
// 返回一个 boolean，表示给定的节点是否与 Range 相交。

Range.selectNode()
// 设置 Range 包含某个节点及其它的内容。

Range.selectNodeContents()
// 设置 Range 包含某个节点的内容。

Range.setEnd()
// 设置 Range 的终点。

Range.setStart()
// 设置 Range 的起点。

Range.setEndAfter() (en-US)
// 以另一个节点为基准，设置 Range 的终点位置。

Range.setEndBefore() (en-US)
// 以另一个节点为基准，设置 Range 的终点位置。

Range.setStartAfter() (en-US)
// 以另一个节点为基准，设置 Range 的起点位置。

Range.setStartBefore()
// 以另一个节点为基准，设置 Range 的起点位置。

Range.surroundContents()
// 将 Range 中的内容移动到一个新的节点。

Range.toString() (en-US)
// 返回 Range 中的文本
```

```javascript
// 起点
setStart(node, offset) // 设置 Range的开始位置。
setStartBefore(node)  // 将起点设在node前面
setStartAfter(node) // 将起点设在node后面

// 终点
setEnd(node, offset)
setEndBefore(node) // 将终点设在node前面
setEndAfter(node) // 将终点设在node后面

// 整个node
selectNode(node) // 选择节点及内容
selectNodeContents(node) // 选择节点的内容
collapse(toStart) // 为true时end=start(收缩到头部)，否则start=end(收缩到末尾)
cloneRange() // 拷贝范围

// 操作内容
deleteContents() // 删除范围内容
extractContents() // 删除范围内容，并返回包裹DocuemntFragment(DOM节点容器)的被删内容
cloneContents() // 复制范围内容，返回包裹DocuemntFragment的选中内容
insertNode(node) // 在范围的起始处将node插入文档
surroundContents(node) // 使用node将范围内容包裹起来。该范围必须包含范围内所有元素的开始和结束标签，不能想<i>abc这样

```

## 获取range方式
```javascript
// 方式1，隶属于Document对象的Range()构造函数
let range1 = new Range()

// 方式2，document.createRange()
let range2 = document.createRange()

// 方式3，Selection.getRangeAt()
let selection = window.getSelection()
let range3 = selection.getRangeAt(0)
// 参数「index」表示选择区域的索引，一般是0，Firefox中可以选中多个区域
// 此种方式内涵了起始位置信息
```
