Html IFrame ContentWindow on Load Demo
=======================

1. iframe load事件，src每次改变都会触发
2. iframe content window对象，像一个壳，不会变，但是其内容每次src改变会都会清空

所以contentWindow里定义的`load` handler或者其它数据，在iframe src改变后会丢失

```
npm i
npm start
```
