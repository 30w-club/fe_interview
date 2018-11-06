const types = {
  js: 'javascript',
  plain: 'plaintext',
  css: 'css'
}

export const questions = [
  {
    title: 'JS的基本数据类型和引用数据类型',
    desc: [
      { type: types.plain, val: '基本数据类型：undefined、null、boolean、number、string、symbol' },
      { type: types.plain, val: '引用数据类型：object(array、function)' }
    ]
  },
  {
    title: `分析 ['1', '2', '3'].map(parseInt) 答案是多少？`,
    desc: [
      { type: types.plain, val: `答案:[1, NaN, NaN]` },
      {
        type: types.plain,
        val: `parseInt(string, radix) 第2个参数 radix 表示进制。省略 radix 或 radix = 0，则数字将以十进制解析`
      },
      {
        type: types.plain,
        val: `map 每次为 parseInt 传3个参数(elem, index, array)，其中 index 为数组索引`
      }
    ]
  },
  {
    title: `水平垂直居中: 定位和需要定位的元素的margin减去宽高的一半`,
    desc: [
      {
        type: types.css,
        val: `
        img{
          width: 100px;
          height: 150px;
          position: absolute; 
          top: 50%; 
          left: 50%; 
          margin-top: -75px; 
          margin-left: -50px;
        }
      `
      }
    ]
  },
  {
    title: `水平垂直居中: 定位和margin:auto`,
    desc: [
      {
        type: types.css,
        val: `
      img{
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
      `
      }
    ]
  },
  {
    title: `水平垂直居中: 绝对定位和transfrom`,
    desc: [
      {
        type: types.css,
        val: `
        img{
          width: 100px;
          height: 100px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
      }
      `
      }
    ]
  },
  {
    title: `水平垂直居中: flexBox居中`,
    desc: [
      {
        type: types.css,
        val: `
        .box{
          width: 300px;
          height: 300px;
          background:#e9dfc7; 
          border:1px solid red;
          display: flex;
          justify-content: center;
          align-items:center;
      }
      img{
          width: 150px;
          height: 100px;
      }
      `
      }
    ]
  },
  {
    title: '确定包含块',
    desc: [
      { type: types.plain, val: '如果 position 属性为 static 或 relative ，包含块就是由它的最近的祖先块元素' },
      { type: types.plain, val: '如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成' },
      { type: types.plain, val: '如果 position 属性是 fixed，包含块就是由 viewport ' }
    ]
  },
  {
    title: '根据包含块计算百分值',
    desc: [
      { type: types.plain, val: '要计算 height top 及 bottom 中的百分值，是通过包含块的 height 的值' },
      { type: types.plain, val: '要计算 width, left, right, padding, margin 这些属性由包含块的 width 属性的值来计算它的百分值' }
    ]
  },
  {
    title: 'this',
    desc: [
      { type: types.plain, val: `
      函数在全局被调用时：
      this 就代表全局对象
      ` },
      { type: types.plain, val: `
      作为对象的方法被调用时：
      this 就是这个上级对象
      ` },
      { type: types.plain, val: `
      作为构造函数调用时：
      this 就是这个新对象
      ` },
      { type: types.plain, val: `
      apply 调用： 
      this 指的是 apply 的第一个参数
      ` }
    ]
  },
  {
    title: '{a:1}.a报错，错误Uncaught SyntaxError: Unexpected token .',
    desc: [
      {
        type: types.js,
        val: '({a:1}.a) // 或({a:1}).a'
      },
      {
        type: types.plain,
        val: '简单说，就是声明对象字面值时，语句开头不应该用{，因为js解释器会认为这是语句块（block）的开始。'
      }
    ]
  },
  {
    title: '123.toFixed(2)报错，错误Uncaught SyntaxError: Unexpected token ILLEGAL',
    desc: [
      { type: types.js, val: `(123).toFixed(2) // >> "123.00"` },
      { type: types.plain, val: `js解释器会把数字后的.当做小数点而不是点操作符` }
    ]
  }
]
