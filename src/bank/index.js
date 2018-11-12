const types = {
  js: 'javascript',
  plain: 'plaintext',
  css: 'css',
  md: 'markdown',
  json: 'json'
}

export const questions = [
  {
    title: { type: types.plain, val: 'JS的基本数据类型和引用数据类型' },
    desc: [
      {
        type: types.plain,
        val: '基本数据类型：undefined、null、boolean、number、string、symbol'
      },
      { type: types.plain, val: '引用数据类型：object(array、function)' }
    ]
  },
  {
    title: {
      type: types.plain,
      val: `分析 ['1', '2', '3'].map(parseInt) 答案是多少？`
    },
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
    title: {
      type: types.plain,
      val: `水平垂直居中: 定位和需要定位的元素的margin减去宽高的一半`
    },
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
      {
        type: types.plain,
        val:
          '如果 position 属性为 static 或 relative ，包含块就是由它的最近的祖先块元素'
      },
      {
        type: types.plain,
        val:
          '如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成'
      },
      {
        type: types.plain,
        val: '如果 position 属性是 fixed，包含块就是由 viewport '
      }
    ]
  },
  {
    title: { type: types.plain, val: '根据包含块计算百分值' },
    desc: [
      {
        type: types.plain,
        val:
          '要计算 height top 及 bottom 中的百分值，是通过包含块的 height 的值'
      },
      {
        type: types.plain,
        val:
          '要计算 width, left, right, padding, margin 这些属性由包含块的 width 属性的值来计算它的百分值'
      }
    ]
  },
  {
    title: { type: types.plain, val: 'this' },
    desc: [
      {
        type: types.plain,
        val: `
      函数在全局被调用时：
      this 就代表全局对象
      `
      },
      {
        type: types.plain,
        val: `
      作为对象的方法被调用时：
      this 就是这个上级对象
      `
      },
      {
        type: types.plain,
        val: `
      作为构造函数调用时：
      this 就是这个新对象
      `
      },
      {
        type: types.plain,
        val: `
      apply 调用： 
      this 指的是 apply 的第一个参数
      `
      }
    ]
  },
  {
    title: {
      type: types.plain,
      val: '{a:1}.a报错，错误Uncaught SyntaxError: Unexpected token .'
    },
    desc: [
      {
        type: types.js,
        val: '({a:1}.a) // 或({a:1}).a'
      },
      {
        type: types.plain,
        val:
          '简单说，就是声明对象字面值时，语句开头不应该用{，因为js解释器会认为这是语句块（block）的开始。'
      }
    ]
  },
  {
    title: {
      type: types.plain,
      val:
        '123.toFixed(2)报错，错误Uncaught SyntaxError: Unexpected token ILLEGAL'
    },
    desc: [
      { type: types.js, val: `(123).toFixed(2) // >> "123.00"` },
      {
        type: types.plain,
        val: `js解释器会把数字后的.当做小数点而不是点操作符`
      }
    ]
  },
  {
    title: {
      type: types.js,
      val: `//parseInt传入数字时为什么有以下输出？
    parseInt(0.000008) // >> 0
    parseInt(0.0000008) // >> 8`
    },
    desc: [
      { type: types.plain, val: 'parseInt(arg)时会调用arg.toString()。' },
      {
        type: types.js,
        val: `(0.000008).toString() // "0.000008"
      (0.0000008).toString() // "8e-7"`
      }
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
      {
        type: types.plain,
        val: `4k, 
        5M`
      },
      {
        type: types.plain,
        val: `一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效, 
        除非被清除，否则永久保存`
      },
      {
        type: types.plain,
        val: `每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题
        仅在客户端（即浏览器）中保存，不参与和服务器的通信`
      }
    ]
  },
  {
    title: { type: types.plain, val: 'position' },
    desc: [
      {
        type: types.plain,
        val: `static
      该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置`
      },
      {
        type: types.plain,
        val: `relative
      该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。`
      },
      {
        type: types.plain,
        val: `absolute
      不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。`
      },
      {
        type: types.plain,
        val: `fixed
      不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。`
      },
      {
        type: types.plain,
        val: `sticky 
      盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。`
      }
    ]
  },
  {
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
  },
  {
    title: { type: types.plain, val: 'http 请求头' },
    desc: [
      {
        type: types.plain,
        val: `Accept: text/plain`
      },
      {
        type: types.plain,
        val: `Accept-Charset: utf-8`
      },
      {
        type: types.plain,
        val: `Accept-Encoding: gzip, deflate`
      },
      {
        type: types.plain,
        val: `Cache-Control: no-cache`
      },
      {
        type: types.plain,
        val: `Cookie: $Version=1; Skin=new;`
      },
      {
        type: types.plain,
        val: `Content-Length: 348`
      },
      {
        type: types.plain,
        val: `Content-Type: application/x-www-form-urlencoded`
      },
      {
        type: types.plain,
        val: `Origin: http://www.itbilu.com`
      },
      {
        type: types.plain,
        val: `Referer: http://itbilu.com/nodejs`
      }
    ]
  },
  {
    title: { type: types.plain, val: '1px问题' },
    desc: [
      { type: types.plain, val: 'border-image' },
      { type: types.plain, val: `根据 dpr 设置 initial-scale 及 rem
        /* 设计稿是750,采用1：100的比例,font-size为100 * (docEl.clientWidth * dpr / 750) */
        var dpr, rem, scale;
        var docEl = document.documentElement;
        var fontEl = document.createElement(‘style‘);
        var metaEl = document.querySelector(‘meta[name="viewport"]‘);
        dpr = window.devicePixelRatio || 1;
        rem = 100 * (docEl.clientWidth * dpr / 750);
        scale = 1 / dpr;
        // 设置viewport，进行缩放，达到高清效果
        metaEl.setAttribute(‘content‘, ‘width=‘ + dpr * docEl.clientWidth + ‘,initial-scale=‘ + scale + ‘,maximum-scale=‘ + scale + ‘, minimum-scale=‘ + scale + ‘,user-scalable=no‘);
        // 设置data-dpr属性，留作的css hack之用，解决图片模糊问题和1px细线问题
        docEl.setAttribute(‘data-dpr‘, dpr);
        // 动态写入样式
        docEl.firstElementChild.appendChild(fontEl);
        fontEl.innerHTML = ‘html{font-size:‘ + rem + ‘px!important;}‘;
      ` },
      {
        type: types.plain, val: `transform scale  (使用 @media 或者 js 查到 dpr 设置相应类名)
          .transform-scale {
            position: relative;
            &:after,
            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                height: 1px;
                width: 100%;
                -webkit-transform: scaleY(0.5);
                transform: scaleY(0.5);
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
                background: #f00;
            }
            &:after {
                top: auto;
                bottom: 0;
                -webkit-transform-origin: 0 100%;
                transform-origin: 0 100%;
            }
        }
        `
      }
    ]
  },
  {
    title: { type: types.plain, val: 'Flex 布局' },
    desc: [
      { type: types.plain, val: 'flex container, flex item' },
      { type: types.plain, val: `
        flex-direction
        flex-wrap
        flex-flow
        justify-content
        align-items
        align-content
      ` },
      { type: types.plain, val: `
        order
        flex-grow
        flex-shrink
        flex-basis
        flex
        align-self
      ` }
    ]
  },
  {
    title: { type: types.plain, val: 'flex: 1;' },
    desc: [{ type: types.plain, val: 'flex: 1 或者 flex: 2 等等。它相当于flex: 1 1 0。元素可以在flex-basis为0的基础上伸缩' }]
  },
  {
    title: { type: types.plain, val: 'absolute 居中' },
    desc: [
      { type: types.css, val: `
        top:0; bottom:0; left:0; right:0; 
        position:absolute; 
        margin:auto; 
        height:something; 
        width:something;
      `}
    ]
  },
  {
    title: { type: types.plain, val: '使用过webpack里面哪些plugin和loader' },
    desc: [
      { type: types.plain, val: `
          eslint-loader
          vue-loader
          babel-loader 
          url-loader 在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
          sass-loader
        `
      },
      {
        type: types.plain, val: `
          DefinePlugin 允许创建一个在编译时可以配置的全局常量。
          HotModuleReplacementPlugin 启用热替换模块(Hot Module Replacement)，也被称为 HMR。
          CopyWebpackPlugin copy custom static assets
          UglifyJsPlugin
          ExtractTextPlugin 将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件
          OptimizeCSSPlugin
          HashedModuleIdsPlugin keep module.id stable when vendor modules does not change
          CommonsChunkPlugin 建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。
        `
      }
    ]
  },
  {
    title: { type: types.plain, val: '编写一个 webpack plugin   class版' },
    desc: [
      {
        type: types.plain,
        val: `
          plugin 是一个 class ，其中有一个 apply 方法，会传入 compiler（webpack 的主环境） 对象，
          compiler 会暴露一组钩子，提供对每个新的编译对象(compilation 一组新的编译资源)的引用。
          反过来，编译对象(compilation)提供了额外的事件钩子函数，用于钩入到构建流程的很多步骤中
        `
      },
      {
        type: types.js,
        val: `
          class FileListPlugin {
            apply(compiler) {
              compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
                // 在生成文件中，创建一个头部字符串：
                var filelist = 'In this build:\n\n';
          
                // 遍历所有编译过的资源文件，
                // 对于每个文件名称，都添加一行内容。
                for (var filename in compilation.assets) {
                  filelist += ('- '+ filename +'\n');
                }
          
                // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
                compilation.assets['filelist.md'] = {
                  source() {
                    return filelist;
                  },
                  size() {
                    return filelist.length;
                  }
                };
          
                callback();
              });
            }
          }
          
          module.exports = FileListPlugin;
        `
      }
    ]
  },
  {
    title: { type: types.plain, val: '编写一个 webpack plugin   prototype版' },
    desc: [
      {
        type: types.plain,
        val: `
          独立的 JS 模块，暴露相应的函数
          函数原型上的 apply 方法会注入 compiler 对象
          compiler 对象上挂载了相应的 webpack 事件钩子
          事件钩子的回调函数里能拿到编译后的 compilation 对象，如果是异步钩子还能拿到相应的 callback
        `
      },
      {
        type: types.js,
        val: `
          function MyPlugin(options) {}
          // 2.函数原型上的 apply 方法会注入 compiler 对象
          MyPlugin.prototype.apply = function(compiler) {
            // 3.compiler 对象上挂载了相应的 webpack 事件钩子 4.事件钩子的回调函数里能拿到编译后的 compilation 对象
            compiler.plugin('emit', (compilation, callback) => {
              ...
            })
          }
          // 1.独立的 JS 模块，暴露相应的函数
          module.exports = MyPlugin
        `
      }
    ]
  },
  {
    title: { type: types.plain, val: 'webpack dev server 怎么跑起来的' },
    desc: [
      { type: types.json, val: `
        "scripts": {
          "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
          "start": "npm run dev",
          "lint": "eslint --ext .js,.vue src",
          "build": "node build/build.js"
        },
      ` },
      {
        type: types.plain,
        val: '不同于 webpack 打包，webpack_dev_server 输出的文件只存在于内存中'
      }
    ]
  },
  {
    title: { type: types.plain, val: 'vue 项目优化' },
    desc: [
      {
        type: types.plain,
        val: `template
          v-show v-if 的使用场景
          :key
          style scpoed
        `
      },
      {
        type: types.plain,
        val: `生态
          vue-router 组件懒加载
        `
      },
      {
        type: types.plain,
        val: `打包
          UI 库按需要加载
          异步组件
        `
      }
    ]
  },
  {
    title: { type: types.plain, val: 'js 对象的深拷贝' },
    desc: [
      { type: types.js, val: `不考虑对象中的函数、正则对象
        function copy (obj) {
          var newobj = obj.constructor === Array ? [] : {};
          if(typeof obj !== 'object'){
              return;
          }
          for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ?
            copy(obj[i]) : obj[i];
          }
          return newobj
        }
      ` },
      { type: types.js, val: 'JSON.parse(JSON.stringify(XXXX))' },
      { type: types.plain, val: 'ES6扩展运算符' },
      { type: types.js, val: 'var copyObj = Object.assign({}, obj)' }
    ]
  },
  {
    title: { type: types.plain, val: 'vue-router 实现路由切换' },
    desc: [
      { type: types.js, val: `Hash Mode:
        改路由：
          window.location.hash = path
          window.location.replace(
            window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
          )
        改视图：
          Vue.mixin -> beforeCreate -> Vue.util.defineReactive(this, '_route', this._router.history.current);
          当_route值改变时，会自动调用Vue实例的render()方法，更新视图

        监听：window.addEventListener("hashchange", funcRef, false);
      ` },
      { type: types.js, val: `History Mode:
        改路由：
          window.history.pushState(stateObject,title,url)
          window.history,replaceState(stateObject,title,url)

        监听：window.addEventListener('popstate', e => {
      `
      }
    ]
  }
]
