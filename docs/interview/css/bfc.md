# 介绍下 BFC 及其应用

块格式化上下文（Block Formatting Context，BFC），是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。

下列方式会创建块格式化上下文：

- 根元素`<html>`
- position为 `absolute` 或 `fixed`
- display为 `inline-block`、表格布局、flex布局
- overflow值不为 `visible` 的块元素
- float值不为 `none` 的元素
- ...

## 主要应用

- 清除浮动
- 处理外边距折叠（margin collapsing）

## 动态示例

BFC示例：

<iframe height="265" style="width: 100%;" scrolling="no" title="Block Formatting Context" src="https://codepen.io/raphaelgoetter/embed/bFqfI?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/raphaelgoetter/pen/bFqfI'>Block Formatting Context</a> by Raphael Goetter
  (<a href='https://codepen.io/raphaelgoetter'>@raphaelgoetter</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

外边距折叠：

<iframe height="265" style="width: 100%;" scrolling="no" title="BFC Margin collapsing" src="https://codepen.io/rachelandrew/embed/YEvzRv?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/rachelandrew/pen/YEvzRv'>BFC Margin collapsing</a> by rachelandrew
  (<a href='https://codepen.io/rachelandrew'>@rachelandrew</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
