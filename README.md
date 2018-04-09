# reactnative-demo



## Installation
```
// 建议使用yarn，不使用npm
npm install [package]   ==	yarn add [package]


// run 
react-native run-android
react-native run-ios
```


## constructs
- `components` 公用组件抽象，和业务无关
- `constants` 这里主要是一些常量，一些字符常量，url常量，还可以有颜色常量等各种
- `img` 图片资源
- `pages` 视图页面
- `styles` 样式,类似Web端对样式变量的内聚管理
- `utils` 工具，将任何不涉及依赖的复用纯函数进行封装）
- `services` 服务
- `App.js` 入口文件
- `Route.js` 路由文件

## 第三方库
- mobx
- axios
- realm
- lodash
- react-native-elements
- react-native-vector-icons
- react-native-scrollable-tab-view

## 功能：
- [ ] 登录：微博、微信、支付宝 
- [ ] 分享：微信、微博
- [ ] 支付：支付宝，微信
- [x] 新闻列表 
- [x] 新闻详情  
- [x] 登录、注册 
