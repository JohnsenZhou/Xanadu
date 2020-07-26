(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{454:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),a("h2",{attrs:{id:"基本类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本类型"}},[t._v("#")]),t._v(" 基本类型")]),t._v(" "),a("ul",[a("li",[t._v("String")]),t._v(" "),a("li",[t._v("Number")]),t._v(" "),a("li",[t._v("Null")]),t._v(" "),a("li",[t._v("Boolean")]),t._v(" "),a("li",[t._v("Object")]),t._v(" "),a("li",[t._v("Underfined")]),t._v(" "),a("li",[t._v("Symbol")])]),t._v(" "),a("h2",{attrs:{id:"类型详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型详解"}},[t._v("#")]),t._v(" 类型详解")]),t._v(" "),a("h3",{attrs:{id:"undefined、null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undefined、null"}},[t._v("#")]),t._v(" Undefined、Null")]),t._v(" "),a("p",[a("code",[t._v("Undefined")]),t._v(" 类型表示未定义，它的类型只有一个值，就是 "),a("code",[t._v("undefined")]),t._v("。"),a("strong",[t._v("任何变量")]),t._v("在赋值前是 "),a("code",[t._v("Undefined")]),t._v(" 类型、"),a("strong",[t._v("值为 "),a("code",[t._v("undefined")])]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("JavaScript 的代码 "),a("code",[t._v("undefined")]),t._v(" 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，我建议使用 "),a("code",[t._v("void 0")]),t._v(" 来获取 "),a("code",[t._v("undefined")]),t._v(" 值。")])]),t._v(" "),a("p",[a("code",[t._v("Null")]),t._v(" 表示"),a("strong",[t._v("定义了但是为空")]),t._v("。所以我们一般不会把变量赋值为 "),a("code",[t._v("undefined")]),t._v("，这样可以保证所有值为 "),a("code",[t._v("undefined")]),t._v(" 的变量，都是从未赋值的自然状态。")]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("p",[a("code",[t._v("String")]),t._v("是字符串的"),a("code",[t._v("UTF-16")]),t._v("编码，所以字符串的操作 "),a("code",[t._v("charAt")]),t._v("、"),a("code",[t._v("charCodeAt")]),t._v("、"),a("code",[t._v("length")]),t._v(" 等方法针对的都是 "),a("code",[t._v("UTF-16")]),t._v(" 编码。")]),t._v(" "),a("h3",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),a("p",[a("code",[t._v("Number")]),t._v(" 类型有 18437736874454810627(即 2^64-2^53+3) 个值。基本符合 IEEE 754-2008 规定的双精度浮点数规则，但是有几个例外情况：")]),t._v(" "),a("ul",[a("li",[t._v("NaN，占用了 9007199254740990，这原本是符合 IEEE 规则的数字")]),t._v(" "),a("li",[t._v("Infinity，无穷大；")]),t._v(" "),a("li",[t._v("-Infinity，负无穷大。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Infinity 无穷大")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -Infinity 负无穷大")]),t._v("\n")])])]),a("p",[t._v("根据双精度浮点数的定义，非整数的 Number 类型无法用 ==（或===）来比较。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("p",[t._v("正确的比较方法是使用 JavaScript 提供的最小精度值：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EPSILON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h3",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),a("p",[t._v("key-value 键值对的集合")]),t._v(" "),a("h2",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),a("p",[t._v("大部分类型转换规则是非常简单的，如下表所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/71/20/71bafbd2404dc3ffa5ccf5d0ba077720.jpg",alt:"类型转换"}})]),t._v(" "),a("p",[t._v("在这个里面，较为复杂的部分是 "),a("code",[t._v("Number")]),t._v(" 和 "),a("code",[t._v("String")]),t._v(" 之间的转换，以及对象跟基本类型之间的转换。我们分别来看一看这几种转换的规则。")]),t._v(" "),a("h3",{attrs:{id:"stringtonumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringtonumber"}},[t._v("#")]),t._v(" StringToNumber")])])}),[],!1,null,null,null);s.default=n.exports}}]);