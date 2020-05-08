## Micro Frontend
基于[qiankun](https://qiankun.umijs.org/)框架的微前端脚手架demo。

### 一、Why 微前端
1. 帮助陈旧应用升级技术栈（之前你可能会有基于传统jquery的应用，如果你想要升级为现代化前端应用，大多时候你需要使用新技术重新实现一遍旧应用的功能来做到升级，不限技术栈的融合）；
2. 解耦巨型中后台前端应用（由于业务的发展，我们的类似后台管理系统，会逐渐扩充业务版块内容，如果一直在一个应用上迭代，这个应用会变得非常庞大）；
3. 业务线聚合以及独立开发独立部署；

### 二、带来的问题
1. 需要合理的部署方案（千万别跨域哦，CDN加持更好哦）
2. 主应用与子应用权限的问题需要好的解决方案（统一登陆、菜单权限、子应用权限等）

### 三、项目架构解析
1. 根src：整体的源码入口
2. constant：子应用配置
3. main: 主应用内容
4. apps: 这个目录下是所有子应用（可以单独拉这个目录下的子应用，单独开发以及部署）

### 四、如何run
```
// main应用启动
npm run dev

// app1
cd src/apps/app1
npm run dev

// app2
cd src/apps/app2
npm run dev
```

### 五、应用截图
![应用截图1](https://github.com/ruralist-siyi/micro-frontend/blob/master/src/static/cut1.png)
![应用截图2](https://github.com/ruralist-siyi/micro-frontend/blob/master/src/static/cut2.png)