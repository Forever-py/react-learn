**属性**

1. datas：一个数组，数组每一项是一个对象，对应一个单选框
    1. 对象具有value和text属性
    2. value：单选框的值
    3. text：单选框的文本

> 例如：
```js
datas=[
    {value:'other',text:'其他'},
    ...
]
```

2. name：每一个单选框的name属性
3. value：字符串，表示当前选中的value值
4. onChange：当选中项发生改变时的事件