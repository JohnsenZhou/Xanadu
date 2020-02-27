# 类型

## 基本类型

- String
- Number
- Null
- Boolean
- Object
- Underfined
- Symbol

## 类型详解

### Undefined、Null

`Undefined` 类型表示未定义，它的类型只有一个值，就是 `undefined`。**任何变量**在赋值前是 `Undefined` 类型、**值为 `undefined`**。
::: tip
JavaScript 的代码 `undefined` 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，我建议使用 `void 0` 来获取 `undefined` 值。
:::

`Null` 表示**定义了但是为空**。所以我们一般不会把变量赋值为 `undefined`，这样可以保证所有值为 `undefined` 的变量，都是从未赋值的自然状态。

### String

`String`是字符串的`UTF-16`编码，所以字符串的操作 `charAt`、`charCodeAt`、`length` 等方法针对的都是 `UTF-16` 编码。

### Number

`Number` 类型有 18437736874454810627(即 2^64-2^53+3) 个值。基本符合 IEEE 754-2008 规定的双精度浮点数规则，但是有几个例外情况：

- NaN，占用了 9007199254740990，这原本是符合 IEEE 规则的数字
- Infinity，无穷大；
- -Infinity，负无穷大。

```js
1/0
// Infinity 无穷大
1/-0
// -Infinity 负无穷大
```

根据双精度浮点数的定义，非整数的 Number 类型无法用 ==（或===）来比较。

```js
console.log( 0.1 + 0.2 == 0.3)
// false
```

正确的比较方法是使用 JavaScript 提供的最小精度值：

```js
console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON)
// true
```

### Object

key-value键值对的集合

## 类型转换

大部分类型转换规则是非常简单的，如下表所示：

![类型转换](https://static001.geekbang.org/resource/image/71/20/71bafbd2404dc3ffa5ccf5d0ba077720.jpg)

在这个里面，较为复杂的部分是 `Number` 和 `String` 之间的转换，以及对象跟基本类型之间的转换。我们分别来看一看这几种转换的规则。

### StringToNumber
