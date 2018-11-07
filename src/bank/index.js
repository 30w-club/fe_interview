const types = {
  js: 'javascript',
  plain: 'plaintext',
  css: 'css',
  md: 'markdown'
}

export const questions = [
  {
    title: { type: types.plain, val: 'JS的基本数据类型和引用数据类型' },
    desc: [
      { type: types.plain, val: '基本数据类型：undefined、null、boolean、number、string、symbol' },
      { type: types.plain, val: '引用数据类型：object(array、function)' }
    ]
  },
  {
    title: { type: types.plain, val: `分析 ['1', '2', '3'].map(parseInt) 答案是多少？` },
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
    title: { type: types.plain, val: `水平垂直居中: 定位和需要定位的元素的margin减去宽高的一半` },
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
    title: { type: types.plain, val: `水平垂直居中: 定位和margin:auto` },
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
    title: { type: types.plain, val: `水平垂直居中: 绝对定位和transfrom` },
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
    title: { type: types.plain, val: `水平垂直居中: flexBox居中` },
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
    title: { type: types.plain, val: '确定包含块' },
    desc: [
      { type: types.plain, val: '如果 position 属性为 static 或 relative ，包含块就是由它的最近的祖先块元素' },
      { type: types.plain, val: '如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成' },
      { type: types.plain, val: '如果 position 属性是 fixed，包含块就是由 viewport ' }
    ]
  },
  {
    title: { type: types.plain, val: '根据包含块计算百分值' },
    desc: [
      { type: types.plain, val: '要计算 height top 及 bottom 中的百分值，是通过包含块的 height 的值' },
      { type: types.plain, val: '要计算 width, left, right, padding, margin 这些属性由包含块的 width 属性的值来计算它的百分值' }
    ]
  },
  {
    title: { type: types.plain, val: 'this' },
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
    title: { type: types.plain, val: '{a:1}.a报错，错误Uncaught SyntaxError: Unexpected token .' },
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
    title: { type: types.plain, val: '123.toFixed(2)报错，错误Uncaught SyntaxError: Unexpected token ILLEGAL' },
    desc: [
      { type: types.js, val: `(123).toFixed(2) // >> "123.00"` },
      { type: types.plain, val: `js解释器会把数字后的.当做小数点而不是点操作符` }
    ]
  },
  {
    title: { type: types.js, val: `//parseInt传入数字时为什么有以下输出？
    parseInt(0.000008) // >> 0
    parseInt(0.0000008) // >> 8`},
    desc: [
      { type: types.plain, val: 'parseInt(arg)时会调用arg.toString()。' },
      { type: types.js, val: `(0.000008).toString() // "0.000008"
      (0.0000008).toString() // "8e-7"` }
    ]
  },
  {
    title: { type: types.plain, val: 'localStorage' },
    desc: [
      { type: types.js, val: 'localStorage.setItem(`myCat`, `Tom`);' },
      { type: types.js, val: 'let cat = localStorage.getItem(`myCat`);' },
      { type: types.js, val: 'localStorage.removeItem(`myCat`);' },
      { type: types.js, val: 'localStorage.clear();' }
    ]
  },
  {
    title: { type: types.plain, val: 'cookie vs localStorage' },
    desc: [
      { type: types.plain, val: `4k, 
        5M` },
      { type: types.plain, val: `一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效, 
        除非被清除，否则永久保存` },
      { type: types.plain, val: `每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题
        仅在客户端（即浏览器）中保存，不参与和服务器的通信` }
    ]
  },
  {
    title: { type: types.plain, val: 'position' },
    desc: [
      { type: types.plain, val: `static
      该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置` },
      { type: types.plain, val: `relative
      该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。` },
      { type: types.plain, val: `absolute
      不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。` },
      { type: types.plain, val: `fixed
      不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。` },
      { type: types.plain, val: `sticky 
      盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。` }
    ]
  }, {
    title: { type: types.plain, val: `跨域的解决办法` },
    desc: [
      {
        type: types.js,
        val: `jsonp
        let script = document.createElement('script')

        script.src = 'http://www.xxx.cn/login?username=xxx&callback=callback'
        
        document.body.appendChild(script)
        
        function callback(res) {
          console.log(res)
        }`
      },
      {
        type: types.js,
        val: `document.domain + iframe

        A页面:
        <iframe 
        style = "display : none" 
        name = "iframe1" 
        id = "iframe" 
        src="http://b.nealyang.cn/1.html" frameborder="0"></iframe>
        <script type="text/javascript">
          $(function(){
            try{
              document.domain = "nealyang.cn"
            }catch(e){}
            $("#iframe").load(function(){
              var jq = document.getElementById('iframe').contentWindow.$
              jq.get("http://nealyang.cn/test.json",function(data){
                console.log(data)
              })
            })
          })
        </script>

        B页面:
        <head>
          <meta charset="UTF-8">
          <title>html</title>
          <script type="text/javascript" src = "jquery-1.12.1.js"></script>
          <script type="text/javascript">
            $(function(){
              try{
                document.domain = "nealyang.com"
              }catch(e){}
            })
          </script>
        </head>
        `
      },
      {
        type: types.js,
        val: `postMessage跨域

        a.html: 
        <iframe id="iframe" src="http://www.neal.cn/b.html" style="display:none"></iframe>
        <script>       
          var iframe = document.getElementById('iframe')
          iframe.onload = function() {
            var data = {
              name: 'aym'
            }
            // 向neal传送跨域数据
            iframe.contentWindow.postMessage(JSON.stringify(data), 'http://www.neal.cn')
          }

          // 接受domain2返回数据
          window.addEventListener('message', function(e) {
            alert('data from neal ---> ' + e.data)
          }, false)
        </script>

        b.html:
        <script>
          // 接收domain1的数据
          window.addEventListener('message', function(e) {
            alert('data from nealyang ---> ' + e.data)

            var data = JSON.parse(e.data)
            if (data) {
              data.number = 16

              // 处理后再发回nealyang
              window.parent.postMessage(JSON.stringify(data), 'http://www.nealyang.cn')
            }
          }, false)
        </script>
        `
      },
      {
        type: types.plain,
        val: `
          cors "跨域资源共享"（Cross-origin resource sharing）

          简单请求 -> 1. head, get, post(post 的 content-type 为 application/x-www-form-urlencoded, multipart/form-data 或 text/plain)；2. 没有自定义请求头
          - 浏览器会加上一个 header 叫 Origin 
          - 服务器需要设置 Access-Control-Allow-Origin 为 * 或者包含由 Origin 指明的站点

          非简单请求 -> 1. put delete； 2. Content-Type字段的类型是application/json
          - 先发送一个 OPTIONS 请求给目的站点，来查明这个跨站请求对于目的站点是不是安全可接受的
          - 如果同意请求则响应中包含 Access-Control-Allow-Origin 并且内容包含当前站点地址；如果不同意则响应中不包含 cors 相关的 header
            - Access-Control-Allow-Origin: http://foo.example //表明服务器允许http://foo.example的请求
            - Access-Control-Allow-Methods: POST, GET, OPTIONS //表明服务器可以接受POST, GET和 OPTIONS的请求方法
            - Access-Control-Allow-Headers: X-PINGOTHER //传递一个可接受的自定义请求头列表。服务器也需要设置一个与浏览器对应。否则会报 Request header field X-Requested-With is not allowed by Access-Control-Allow-Headers in preflight response 的错误
            - Access-Control-Max-Age: 1728000 //告诉浏览器，本次“预请求”的响应结果有效时间是多久。在上面的例子里，1728000秒代表着20天内，浏览器在处理针对该服务器的跨站请求，都可以无需再发送“预请求”，只需根据本次结果进行判断处理。
          - 预检之后，就和简单请求一样了（Origin/Access-Control-Allow-Origin）
        `
      }
    ]
  }
]
