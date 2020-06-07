(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(t,e,r){"use strict";r.r(e);var s=r(25),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"数组-链表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组-链表"}},[t._v("#")]),t._v(" 数组&链表")]),t._v(" "),r("h2",{attrs:{id:"数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),r("p",[t._v("数组（Array）是一种线性表数据结构。它用一组连续的内存空间，来存储一组具有相同类型的数据。")]),t._v(" "),r("h3",{attrs:{id:"为什么数组要从-0-开始编号，而不是从-1-开始呢？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么数组要从-0-开始编号，而不是从-1-开始呢？"}},[t._v("#")]),t._v(" 为什么数组要从 0 开始编号，而不是从 1 开始呢？")]),t._v(" "),r("blockquote",[r("p",[t._v("从数组存储的内存模型上来看，“下标”最确切的定义应该是“偏移（offset）”。前面也讲到，如果用 a 来表示数组的首地址，a[0]就是偏移为 0 的位置，也就是首地址，a[k]就表示偏移 k 个 type_size 的位置，所以计算 a[k]的内存地址只需要用这个公式：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("a[k]_address = base_address + k * type_size\n")])])]),r("p",[t._v("但是，如果数组从 1 开始计数，那我们计算数组元素 a[k]的内存地址就会变为：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("a[k]_address = base_address + (k-1)*type_size\n")])])]),r("p",[t._v("对比两个公式，我们不难发现，从 1 开始编号，每次随机访问数组元素都多了一次减法运算，对于 CPU 来说，就是多了一次减法指令。")])]),t._v(" "),r("h2",{attrs:{id:"链表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[t._v("#")]),t._v(" 链表")]),t._v(" "),r("p",[t._v("链表不需要一块连续的内存空间，它通过“指针”将一组零散的内存块串联起来使用。如果我们申请一个 100MB 大小的数组，当内存中没有连续的、足够大的存储空间时，即便内存的剩余总可用空间大于 100MB，仍然会申请失败，而链表就不会有问题。")]),t._v(" "),r("p",[t._v("通常应用于以下场景：")]),t._v(" "),r("ul",[r("li",[t._v("改善插入和删除操作")]),t._v(" "),r("li",[t._v("不知道有多少元素在")])]),t._v(" "),r("h2",{attrs:{id:"复杂度对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复杂度对比"}},[t._v("#")]),t._v(" 复杂度对比")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("时间复杂度")]),t._v(" "),r("th",{staticStyle:{"text-align":"right"}},[t._v("随机访问")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("插入/删除")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("数组")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("O(1)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")])]),t._v(" "),r("tr",[r("td",[t._v("链表")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("O(n)")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("O(1)")])])])]),t._v(" "),r("h2",{attrs:{id:"经典面试算法练习"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#经典面试算法练习"}},[t._v("#")]),t._v(" 经典面试算法练习")]),t._v(" "),r("h3",{attrs:{id:"_1、反转一个单链表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、反转一个单链表"}},[t._v("#")]),t._v(" 1、反转一个单链表 "),r("Badge",{attrs:{text:"简单",type:"tip"}})],1),t._v(" "),r("p",[t._v("题目详情："),r("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/reverse-linked-list/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("参考题解："),r("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-linked-list/solution/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/reverse-linked-list/solution/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("我的题解：")]),t._v(" "),r("h3",{attrs:{id:"_2、两两交换链表中的节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、两两交换链表中的节点"}},[t._v("#")]),t._v(" 2、两两交换链表中的节点 "),r("Badge",{attrs:{text:"中等",type:"warning"}})],1),t._v(" "),r("p",[t._v("题目详情："),r("a",{attrs:{href:"https://leetcode-cn.com/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/swap-nodes-in-pairs/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("参考题解："),r("a",{attrs:{href:"https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("我的题解：")]),t._v(" "),r("h3",{attrs:{id:"_3、环形链表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、环形链表"}},[t._v("#")]),t._v(" 3、环形链表 "),r("Badge",{attrs:{text:"简单",type:"tip"}})],1),t._v(" "),r("p",[t._v("题目详情："),r("a",{attrs:{href:"https://leetcode-cn.com/problems/linked-list-cycle/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/linked-list-cycle/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("参考题解："),r("a",{attrs:{href:"https://leetcode-cn.com/problems/linked-list-cycle/solution/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/linked-list-cycle/solution/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("我的题解：")]),t._v(" "),r("h3",{attrs:{id:"_4、环形链表-ii"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、环形链表-ii"}},[t._v("#")]),t._v(" 4、环形链表 II "),r("Badge",{attrs:{text:"中等",type:"warning"}})],1),t._v(" "),r("p",[t._v("题目详情："),r("a",{attrs:{href:"https://leetcode-cn.com/problems/linked-list-cycle-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/linked-list-cycle-ii/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("参考题解："),r("a",{attrs:{href:"https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("我的题解：")])])}),[],!1,null,null,null);e.default=a.exports}}]);