(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{215:function(t,v,a){"use strict";a.r(v);var _=a(17),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第一题：介绍下重绘和回流，以及如何进行优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一题：介绍下重绘和回流，以及如何进行优化"}},[t._v("#")]),t._v(" 第一题：介绍下重绘和回流，以及如何进行优化")]),t._v(" "),a("h2",{attrs:{id:"浏览器渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[t._v("#")]),t._v(" 浏览器渲染过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://qnm.hunliji.com/FmC3WzznEuwQwhEKn9YWn43phArJ",alt:"alt"}}),t._v(" "),a("img",{attrs:{src:"https://qnm.hunliji.com/FlLkaoREwktwkJapoXxy99wktaJ7",alt:"将 DOM 与 CSSOM 合并以形成渲染树"}})]),t._v(" "),a("ol",[a("li",[t._v("解析HTML生产DOM树；")]),t._v(" "),a("li",[t._v("解析CSS生成CSSOM树")]),t._v(" "),a("li",[t._v("将DOM树和CSSOM树结合，生成渲染树(Render Tree)")]),t._v(" "),a("li",[t._v("根据渲染树来布局，以计算每个节点的几何信息。")]),t._v(" "),a("li",[t._v("将各个节点绘制到屏幕上。")])]),t._v(" "),a("h2",{attrs:{id:"回流（reflow）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回流（reflow）"}},[t._v("#")]),t._v(" 回流（reflow）")]),t._v(" "),a("p",[t._v("回流是在网络浏览器中执行的一个流程，用于重新计算文档中各元素的位置和几何形状（重复上述浏览器渲染过程中的第四步）")]),t._v(" "),a("h3",{attrs:{id:"会导致回流的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#会导致回流的操作"}},[t._v("#")]),t._v(" 会导致回流的操作")]),t._v(" "),a("ul",[a("li",[t._v("页面首次渲染")]),t._v(" "),a("li",[t._v("浏览器窗口大小发生改变")]),t._v(" "),a("li",[t._v("元素尺寸或位置发生改变")]),t._v(" "),a("li",[t._v("元素内容变化（文字数量或图片大小等等）")]),t._v(" "),a("li",[t._v("元素字体大小变化")]),t._v(" "),a("li",[t._v("添加或者删除可见的DOM元素")]),t._v(" "),a("li",[t._v("激活CSS伪类（例如：:hover）")]),t._v(" "),a("li",[t._v("查询某些属性或调用某些方法")])]),t._v(" "),a("h2",{attrs:{id:"重绘（repaint）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘（repaint）"}},[t._v("#")]),t._v(" 重绘（repaint）")]),t._v(" "),a("p",[t._v("当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。")]),t._v(" "),a("h2",{attrs:{id:"最小化重绘和重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最小化重绘和重排"}},[t._v("#")]),t._v(" 最小化重绘和重排")]),t._v(" "),a("h3",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),a("ul",[a("li",[t._v("避免使用"),a("code",[t._v("table")]),t._v("布局。")]),t._v(" "),a("li",[t._v("尽可能在"),a("code",[t._v("DOM")]),t._v("树的最末端改变"),a("code",[t._v("class")]),t._v("。回流是不可避免的，但可以减少其影响。尽可能在"),a("code",[t._v("DOM")]),t._v("树的最末端改变"),a("code",[t._v("class")]),t._v("，可以限制了回流的范围，使其影响尽可能少的节点。")]),t._v(" "),a("li",[t._v("避免设置多层内联样式。")]),t._v(" "),a("li",[t._v("将动画效果应用到"),a("code",[t._v("position")]),t._v("属性为"),a("code",[t._v("absolute")]),t._v("或"),a("code",[t._v("fixed")]),t._v("的元素上。")]),t._v(" "),a("li",[t._v("避免使用"),a("code",[t._v("CSS")]),t._v("表达式（例如："),a("code",[t._v("calc()")]),t._v("）。")])]),t._v(" "),a("h3",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" Javascript")]),t._v(" "),a("ul",[a("li",[t._v("避免频繁操作样式，最好一次性重写"),a("code",[t._v("style")]),t._v("属性，或者将样式列表定义为"),a("code",[t._v("class")]),t._v("并一次性更改"),a("code",[t._v("class")]),t._v("属性。")]),t._v(" "),a("li",[t._v("避免频繁操作"),a("code",[t._v("DOM")]),t._v("，创建一个"),a("code",[t._v("documentFragment")]),t._v("，在它上面应用所有"),a("code",[t._v("DOM")]),t._v("操作，最后再把它添加到文档中。")]),t._v(" "),a("li",[t._v("避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。")]),t._v(" "),a("li",[t._v("对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("REFLOWS & REPAINTS: CSS PERFORMANCE MAKING YOUR JAVASCRIPT SLOW?"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/chenjigeng/blog/issues/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的了解回流和重绘吗"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5a9923e9518825558251c96a",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的回流与重绘 (Reflow & Repaint)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=e.exports}}]);