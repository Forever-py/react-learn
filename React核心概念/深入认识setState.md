# 深入认识 setState

setState，它对状态的改变，**可能**是异步的

> 如果改变状态的代码处于某个 HTML 元素的事件中，则其是异步的，否则是同步的

如果遇到某个事件中，需要同步调用多次，需要使用函数的方式得到最新的状态

```js
this.setState((cur) => {
  // 参数 cur 表示当前的状态
  // 该函数的返回结果，会混合(覆盖)掉之前的状态
  // 该函数是异步执行
  return {
    n: cur.n + 1,
  };
});
```

最佳实践：

1. 把所有的 setState 当作是异步的
2. 永远不要信任 setState 调用之后的状态
3. 如果要使用改变之后的状态，需要使用回调函数(setState 的第二个参数)
    ```js
    this.setState({ n: this.state.n + 1 }, () => {
    // 状态完成改变之后触发   该回调运行在render之后
    console.log(this.state.n);
    });
    ```
4. 如果新的状态要根据之间的状态进行运算，使用函数的方式改变状态(setState 的第一个参数还可以是函数)

React会对异步的setState进行优化，将多次setState进行合并（将多次状态改变完成后，在统一对state进行改变，然后触发render）
