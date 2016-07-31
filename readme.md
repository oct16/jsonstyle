jsonstyle是一个json风格转换器  
它可以把任何合法的json对象转换成驼峰或下划线风格

[DEMO](http://fengfan.me/jsonstyle)

### Install
```
 npm i jsonstyle --save
```

### Usage
```
//in nodeJs ES6
import jsonstyle from 'jsonstyle'
let json = {}
let result1 = jsonstyle.c(json)  //转驼峰风格
let result2 = jsonstyle._(json)  //转下划线风格

```

