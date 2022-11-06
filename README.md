# BABY CREATE REACT

> This section refers to official documentation and is based on references when there is nothing
>
> 这一节就是我记录咋开一个React项目

Empty folder：

```bash
npx create-react-app yourprojectname
cd yourprojectname
npm start
```

You can visit `http://localhost:3000/` to look your React

```
初始项目结构如下：
┌── public               // 公共资源文件
│   ├── favicon.ico      // 是浏览器tab上图标，也是这个项目的一个标志，也可以说是代表一个公司的标志。可以替换。
│   ├── index.html       // 主文件
│   └── manifest.json    // 编译配置文件
│
├── node_modules         // 项目依赖包文件夹
├── src                  // 我们的项目的源码编写文件（里面的文件可根据喜好，随意更改）
│   ├── App.css          // 样式文件（删除）
│   ├── App.js           // 入口组件，其他组件会被插入此组件中，此组件通过index.js再插入 index.html 文件里，形成单页面应用；
│   ├── App.test.js      // 测试文件（删除）
│   ├── index.css        // 样式文件（删除）
│   ├── index.js         // 存放的是这个项目的核心内容，也就是我们的主要工作区域。其中，index.js文件是和index.html进行关联的文件的唯一接口，类似vue里面的main.js。
│   ├── serviceWorker.js // 
├── package-lock.json    // npm5 新增文件，优化性能
├── package.json         // 项目依赖包配置文件（node配置文件）
└── README.md            // 项目说明文档
```

# What I learned today (what's in this project)

1.Find out what the React project has.	了解一个React项目有啥

2.Delete anything in src	删除原来的`src`中的内容(`src`留着)

3.first component:App.js	创建第一个组件`App.js`来`Helloworld`

4.know State and know Props by View.js	创建`View.js`学习`State`和`Props` 

5.Router	学路由(对应`Home.js`,`Page1.js`,`Page2.js`,`Page3.js`)

> 一个网站，光有首页是不够的，需要添加页面跳转功能，才能让访问者逐层地看到网站丰富的内容。传统的前端页面使用超链接的方式进行跳转，比如：HTML标签中的  `<a href=' '>点击</a>` ，浏览器获取到链接地址后，会根据这个地址进行访问。然而，React框架采用的Router却不是传统的链接跳转。因为，严格来说，React项目中的内容都是呈现在一张HTML中的

6.React18 has some different... still learning...	发现一些error来自版本问题...

7.Router!Route!Link!{}!	注意版本问题外import的问题，还有一些格式问题

---

8.Learn how to use CSS	React项目中采用的是虚拟DOM，组件也是放在一个个的JS文件中，所以CSS的使用和引入方式就略有不同，这里我是`Page1.js`内嵌CSS，`Page2.js`是引入`style.css`，这里补充一下，照理应该少用px而是用百分比，但是这个就是demo所以我随意了...

It's now 2022-11-6 0:04, wake up and look at data interaction

---

It's now 2022-11-6 21:15, I suddenly remembered to learn...

9.Request data from the server and display it

> use`$ cnpm install express --save` 
>
> https://www.runoob.com/nodejs/nodejs-express-framework.html
>
> 去搭建server
>
> 当然纯为了react，给个假数据也是可以的

>关于这个server就不单独开个仓库了，本来这个reactdemo就有点蠢了...\
>
>新建文件夹
>
>`cnpm install express --save`
>
>`cnpm install body-parser --save`
>
>`cnpm install cookie-parser --save`
>
>`cnpm install multer --save`
>
>创建`myserver.js`
>
>`myserver.js`内容：
>
>```js
>var express = require('express');
>var app = express();
>//跨域问题
>app.all('*', function(req, res, next) {
>    res.header("Access-Control-Allow-Origin", "*");
>    res.header("Access-Control-Allow-Headers","X-Requested-With");
>    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
>    res.header("X-Powered-By",' 3.2.1');
>    res.header("Content-Type","application/json;charset=utf-8"); 
>    next();
>});
>app.get('/', function(req, res) {
>        res.send('GoodMorning!node!');
>    }
>)
>app.get('/json', function(req, res) { 
>    //添加的代码
>    let myjson = {
>        name :'LuoCheng',
>        IQ :'65535',
>        date : '2022-11-6'
>    }
>    res.send(myjson);
>})
>var server = app.listen(8081, function() {
>        var host = server.address().address
>        var port =server.address().port
>        console.log("应用实例，访问地址为 http://%s:%s",host,port)
>    }
>)
>```
>
>`node myserver.js`
>
>可访问`localhost:8081/`

回到react

10.请求数据 用刚好没用的page3从node那里拿数据

