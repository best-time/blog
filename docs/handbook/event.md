# 事件

## document.createEvent
```javascript
// Event UIEvents MouseEvents MutationEvents HTMLEvents TextEvents CustomEvent
// initUIEvent initMouseEvent initMutationEvent initTextEvent initCustomEvent
let elem = document.getElementById('box')
// 创建事件
var event = document.createEvent('Event');
// 定义事件名为'build'.
event.initEvent('build', true, true); // event.initEvent(type, bubbles, cancelable);
// 监听事件
elem.addEventListener('build', function (e) {
  // e.target matches elem
  //   console.log(e)
}, false);
// 触发对象可以是任何元素或其他事件目标
elem.dispatchEvent(event);
```

## 鼠标事件

| 事件 | 说明 |
|----|----|
|mouseover | 鼠标指针移出某个元素到另一个元素上时发生 (存在事件冒泡)|
|mouseout | 鼠标指针位于某个元素上且将要移出元素的边界时发生(存在事件冒泡) |
| mousedown | 单击任意一个鼠标按钮时发生 |
| mousemove | 鼠标在某个元素上时持续发生 |
| mouseup | 松开任意一个鼠标按钮时发生 |
| | |
| mouseenter | 鼠标指针移出某个元素到另一个元素上时发生 (不会发生冒泡)|
| mouseleave | 鼠标指针位于某个元素上且将要移出元素的边界时发生 (不会发生冒泡) |
| | mousedown-> mouseup -> click -> mousedown -> mouseup -> click-> dbclick |
| | 如果鼠标从divA->divB，在divA上发生mouseout（mouseleave），event.target === divA并且event.relatedTarget === divB。相反，在divB上发生mouseover（mouseenter），event.target ===divB且event.relatedTarget === divA |



## touch

| 事件 | 说明 |
|----|----|
| touchstart|当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。 |
| touchmove|当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。|
|touchend|当手指从屏幕上离开的时候触发。|
|touchcancel|当一些更高级别的事件发生的时候（如电话接入或者弹出信息）会取消当前的touch操作，即触发touchcancel。一般会在touchcancel时暂停游戏、存档等操作。|

| 属性 | 说明 |
|----|----|
| touches |表示当前跟踪的触摸操作的touch对象的数组。|
| targetTouches |特定于事件目标的Touch对象的数组。（正在触摸当前 DOM 元素上的手指的一个列表。）|
| changeTouches |表示自上次触摸以来发生了什么改变的Touch对象的数组|
| Touch对象包含属性 | |
| identifier | 此 Touch 对象的唯一标识符。 一次触摸动作(我们指的是手指的触摸)在平  面上移动的整个过程中，该标识符不变。 可以根据它来判断跟踪的是否是同一次触摸过程，此值为只读属性。| 
| screenX| 触点相对于屏幕左边沿的X坐标。只读属性。 |
| screenY | 触点相对于屏幕上边沿的Y坐标。只读属性 |
| clientX |触点相对于可见视区(visual viewport)左边沿的X坐标。不包括任何滚动偏移。只读属性。 |
| clientY |触点相对于可见视区(visual viewport)上边沿的Y坐标。不包括任何滚动偏移。只读属性。 |
| pageX |触点相对于HTML文档左边沿的X坐标。当存在水平滚动的偏移时，这个值包含了水平滚动的偏移。只读属性。 |
| pageY | 触点相对于HTML文档上边沿的Y坐标。当存在水平滚动的偏移时，这个值包含了垂直滚动的偏移。只读属性。|
| radiusX | 能够包围用户和触摸平面的接触面的最小椭圆的水平轴(X轴)半径。这个值的单位和 screenX 相同。只读属性。|
| radiusY | 能够包围用户和触摸平面的接触面的最小椭圆的垂直轴(Y轴)半径。这个值的单位和 screenY 相同。只读属性。|
| rotationAngle |它是这样一个角度值：由radiusX 和 radiusY描述的正方向的椭圆，需要通过顺时针旋转这个角度值，才能最精确地覆盖住用户和触摸平面的接触面。只读属性。|
| force | 手指挤压触摸平面的压力大小，从0.0(没有压力)到1.0(最大压力)的浮点数。只读属性。|
| target | 当这个触点最开始被跟踪时(在 touchstart 事件中)，触点位于的HTML元素。哪怕在触点移动过程中，触点的位置已经离开了这个元素的有效交互区域，或者这个元素已经被从文档中移除。需要注意的是，如果这个元素在触摸过程中被移除，这个事件仍然会指向它，但是不会再冒泡这个事件到 window 或 document 对象。因此，如果有元素在触摸过程中可能被移除，最佳实践是将触摸事件的监听器绑定到这个元素本身，防止元素被移除后，无法再从它的上一级元素上侦测到从该元素冒泡的事件。只读属性。|



## 坐标
```javascript
event.shiftKey // shift键是否被按下。
event.ctrlKey // ctrl键是否被按下。
event.altKey // alt键是否被按下。
event.mateKey // cmd键(Mac专用)是否被按下。
```

## 键盘事件
```javascript
keydown // 按下任意键盘触发。持续按住按键会持续触发该事件。
keyup // 松开任意按键。
```
