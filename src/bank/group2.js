import types from './TYPES'

export default [
  {
    title: { type: types.plain, val: 'promise' },
    desc: [
      { type: types.js, val: `创建 promise 对象
        new Promise()

        Promise.resolve 和 Promise.reject
        
          //Promise.resolve(42) 相当于
          new Promise(function(resolve){
            resolve(42);
          });
      ` },
      { type: types.plain, val: `Promise.all
        传递给 Promise.all 的promise并不是一个个的顺序执行的，而是同时开始、并行执行的
      `},
      { type: types.plain, val: `Promise.race
        Promise.race 只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理
      `},
      { type: types.plain, val: `reject
        将promise对象的状态设置为Rejected的时候应该使用 reject 而不是 throw
        因为我们很难区分 throw 是我们主动抛出来的，还是因为真正的其它 异常 导致的
      `},
      { type: types.plain, val: `then 返回值
        不管是 then 还是 catch 方法调用，都返回了一个新的promise对象

        如果then中的回调函数返回一个值，那么then返回的Promise将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
        如果then中的回调函数抛出一个错误，那么then返回的Promise将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
        如果then中的回调函数返回一个已经是接受状态的Promise，那么then返回的Promise也会成为接受状态，并且将那个Promise的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
        如果then中的回调函数返回一个已经是拒绝状态的Promise，那么then返回的Promise也会成为拒绝状态，并且将那个Promise的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
        如果then中的回调函数返回一个未定状态（pending）的Promise，那么then返回Promise的状态也是未定的，并且它的终态与那个Promise的终态相同；同时，它变为终态时调用的回调函数参数与那个Promise变为终态时的回调函数的参数是相同的。
      `}
    ]
  }
]
