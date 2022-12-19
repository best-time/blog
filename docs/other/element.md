
## el-scrollbar

```javascript
<el-scrollbar>
  <div class="box">
    <p v-for="item in 15" :key="item">欢迎使用 el-scrollbar {{item}}</p>
  </div>
</el-scrollbar>

<style scoped>
.el-scrollbar {
  border: 1px solid #ddd;
  height: 200px;
}
.el-scrollbar ::v-deep  .el-scrollbar__wrap {
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>

```

## el-input
```
// 输入中文, 焦点上移
::v-deep .el-input__inner {
    line-height: 1px !important;
}
// type=number 去除上下箭头
.clear-number-input ::v-deep input[type="number"]::-webkit-outer-spin-button,
.clear-number-input ::v-deep input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
}
```

## el-table
```
table 添加属性: show-overflow-tooltip
```