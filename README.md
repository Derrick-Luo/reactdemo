# BABY CREATE REACT

> This section refers to official documentation and is based on references when there is nothing

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

1.Find out what the React project has.

2.Delete anything in src

3.first component:App.js

4.know State and know Props by View.js

5.Router

> 一个网站，光有首页是不够的，需要添加页面跳转功能，才能让访问者逐层地看到网站丰富的内容。传统的前端页面使用超链接的方式进行跳转，比如：HTML标签中的  `<a href=' '>点击</a>` ，浏览器获取到链接地址后，会根据这个地址进行访问。然而，React框架采用的Router却不是传统的链接跳转。因为，严格来说，React项目中的内容都是呈现在一张HTML中的