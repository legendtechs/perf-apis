# Perf-api-pages
关于一些提升页面性能web api的使用demo

```sh
  #启动
  yarn start
```
#### 1.IntersectionObserver
```intersection
const options = {
  root: list,
  rootMargin: '0px',
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6 ,0.7, 0.8, 0.9, 1]
}

```

### 构建工具采用parcel
具体请移步：
0. [parceljs:pacel工具使用手册](https://parceljs.org/)
1. [MDN规范-IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)