# Vue

## 生命周期

```javascript

	挂载阶段: beforeCreate created beforeMounted mounted
	更新阶段: beforeUpdate updated
	销毁阶段: beforeDestory destoryed

  init Events and lifecycle
-beforeCreate
  init injections and reactivity
-created
  el ?
  template ?
  render  or compile html
-beforeMounted
  create vm.$el and replace el with it
-mounted
-beforeUpdate
-updated
-beforeDestory
  teardown watchers child components and listeners
-destoryed


各个阶段做什么

-created：
在Vue实例创建完毕状态，我们可以去访问data、computed、watch、methods上的方法和数据，但现在还没有将虚拟Dom挂载到真实Dom上，
所以我们在此时访问不到我们的Dom元素（el属性，ref属性此时都为空）。

-beforeMount： 它是在挂载之前被调用的，会在此时去找到虚拟Dom，并将其编译成Render

-mounted： 虚拟Dom已经被挂载到真实Dom上，此时我们可以获取Dom节点，$ref在此时也是可以访问的。

```

## 父子组件生命周期

```
挂载阶段：父组件 beforeMount -> 子组件 created -> 子组件 mounted -> 父组件 mounted
更新阶段：父组件 beforeUpdate -> 子组件 beforeUpdate -> 子组件 updated -> 父组件 updated
销毁阶段：父组件 beforeDestroy -> 子组件 beforeDestroy -> 子组件 destroyed -> 父组件 destroyed
```