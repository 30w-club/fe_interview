export const questions = [
  {
    id: 0,
    title: 'JS的基本数据类型和引用数据类型',
    desc: [
      '基本数据类型：undefined、null、boolean、number、string、symbol',
      '引用数据类型：object(array、function)'
    ]
  },
  {
    id: 1,
    title: `分析 ['1', '2', '3'].map(parseInt) 答案是多少？`,
    desc: [
      `答案:[1, NaN, NaN]`,
      `parseInt(string, radix) 第2个参数 radix 表示进制。省略 radix 或 radix = 0，则数字将以十进制解析`,
      `map 每次为 parseInt 传3个参数(elem, index, array)，其中 index 为数组索引`
    ]
  }
]
