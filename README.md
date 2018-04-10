# reactnative-demo



## Installation
```
// 建议使用yarn，不使用npm
npm install [package]   ==	yarn add [package]

// 切换到开发分支
git checkout dev

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


## 需要开发的内容
### 功能：
- [ ] 登录：微博、微信、支付宝 
- [ ] 分享：微信、微博、其他App
- [ ] 支付：支付宝，微信
- [ ] 推送通知：第三方平台，自己开发服务端
- [ ] 数据持久化 `realm`
- [x] 新闻列表 
- [x] 新闻详情  
- [x] 登录、注册 
- [ ] 热更新

### 常用组件
- [x] 网络axios
- [x] 列表：Flatlist
- [ ] 网络信息、设备信息
- [ ] 视频播放，i3u8直播
- [ ] 图片选择、图片压缩、上传
- [ ] 拍照、拍视频
- [ ] 网络数据缓存、图片缓存
- [ ] 动画使用

## 其他
- [ ] 开发自定义组件
- [ ] 和原生页面互转
- [ ] 整理常用的utils

## 抽离常用组件
待补充...