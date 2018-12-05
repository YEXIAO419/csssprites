# csssprites
俗称的雪碧图，把小图合并成一个大图，减少资源请求，优化前端性能。可以ps切图，堆在同一张图上，也可webpack配置。这里介绍的是webpack配置：		

## 安装vue脚手架
```
npm install -g @vue/cli  // 3.x版本
vue create cssprites  // 注意：文件名不能有大写
```

### 安装webpack-spritesmith
```
npm install webpack-spritesmith --save-dev  // 雪碧图插件
```

### 配置webpack
```
在根目录下面新建vue.config.js，具体配置看代码
```

### 运行
```
npm run serve
```

