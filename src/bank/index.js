export const questions = [
  {
    id: 0,
    title: 'JS的基本数据类型和引用数据类型',
    desc: [
      {type: 'plaintext', val: '基本数据类型：undefined、null、boolean、number、string、symbol'},
      {type: 'plaintext', val: '引用数据类型：object(array、function)'}
    ]
  },
  {
    id: 1,
    title: `分析 ['1', '2', '3'].map(parseInt) 答案是多少？`,
    desc: [
      {type: 'plaintext', val: `答案:[1, NaN, NaN]`},
      {type: 'plaintext', val: `parseInt(string, radix) 第2个参数 radix 表示进制。省略 radix 或 radix = 0，则数字将以十进制解析`},
      {type: 'plaintext', val: `map 每次为 parseInt 传3个参数(elem, index, array)，其中 index 为数组索引`}
    ]
  },
  {
    id: 2,
    title: `水平垂直居中: 定位和需要定位的元素的margin减去宽高的一半`,
    desc: [
      {type: 'css', val: `
        img{
          width: 100px;
          height: 150px;
          position: absolute; 
          top: 50%; 
          left: 50%; 
          margin-top: -75px; 
          margin-left: -50px;
        }
      `}
    ]
  }
]
