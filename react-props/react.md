#### props
组件之间沟通，只能父子之间，父组件向子组件传数据，父组件在子组件的标签上写要自定义属性的，子组件用this.props接收，组件内部在任何地方都可以拿到
```js
父组件
<Btn title='注册' pad={13} bg='red'/>
子组件
<button style={{border:'none',padding:`${this.props.pad}px`,background:this.props.bg,color:'#fff'}}>
  {this.props.title}
</button>

在子组件里写，组件默认的属性
Btn.defaultProps = {
  title:'我是默认的标题',
  bg:'blue',
  pad:21
}
```
#### 检测传入的props的数据类型
首先安装检测类型的包 npm install prop-types  
```js
import PropTypes from 'prop-types';
Btn.propTypes = {
  title: PropTypes.string
}
```

#### children
特殊的props，写在标签中间
```js
<Child>
  <p style={{fontSize:'20px'}}>ddddddddd</p>
</Child>
{this.props.children}
```

#### 生命周期函数
`默认执行，不需要调用`  
##### 初始化,首次挂载
constructor() 获取默认属性  执行顺序最高,如果要从constructor中获得props，需要
```js
constructor(props){
  super(props);
}
```
componentWillMount()  首次渲染之前  
render() 渲染  必须写，必须有返回值，返回值为JSX节点   
componentDidMount()  首次渲染之后  

##### 更新
修改props,通过setState修改state会触发组件的更新阶段  
componentWillReceiveProps(nextProps)  组件将要收到新的props属性发生变化，就会触发更新(父级传入的props发生变化，而且必须是父级控制的state发生变化)   
shouldComponentUpdate(nextProps, nextState)  判断是否需要更新，必须返回一个布尔值 返回true更新，false阻止更新
componentWillUpdate(nextProps, nextState)   更新之前  nextState下一个状态   
render() 渲染  
componentDidUpdate(prevProps, prevState)   更新之后   prevState更新成功之前的状态  
##### 销毁
componentWillUnmount()



#### 表单
e.target  触发事件的目标
```js
constructor(){
  super();
  this.state={
    input:''
  }
}
handleSubmit(e){
  e.preventDefault()  //阻止跳转
  e.target.reset()    //清空表单数据,用状态控制无法清空
}
handleChange(e){
  console.log(e.target.value);
  this.setState({input:e.target.value})
}
<form onSubmit={this.handleSubmit.bind(this)}>
  <input placeholder='name' value={this.state.input} onChange={this.handleChange.bind(this)}/>
  <button>提交</button>
</form>
```
defaultValue 非受控的，只能通过设置ref获得值

文本域  下拉菜单
```js
textarea(e){
  this.setState({textarea:e.target.value})
}
<textarea value={this.state.textarea} onChange={this.textarea.bind(this)}/>

handleSelect(e){
  this.setState({select:e.target.value})
}
<select value={this.state.select} onChange={this.handleSelect.bind(this)}>
  <option value="gr">Gr</option>
  <option value="hr">Hr</option>
</select>

handleRadio(e){
  this.setState({radio:e.target.value})
}
男<input name="goodRadio" type="radio" value="boy" onChange={this.handleRadio.bind(this)}/>
女<input name="goodRadio" type="radio" value="gril" onChange={this.handleRadio.bind(this)} defaultChecked/>
```
多选
```js
handleCheck(e){
  this.setState({checkbox:e.target.checked})
}
<input type="checkbox" checked={this.state.checkbox} onChange={this.handleInput.bind(this)} name="checkbox"/>
```


声明一个对象时，属性名也可以是一个变量，用方括号包裹
```js
let prop = 'aaa';
let obj = {[prop] : 888}
let obj1[prop] = 888;
```

所以可以把上面的一堆方法整合
```js
handleSubmit(e){
  e.preventDefault();
}
handleInput(e){
  let target = e.target;
  console.log(target.name);
  let value = target.name==='checkbox' ? target.checked : target.value
  console.log(value);
  this.setState({
    [target.name] : value
  })
}
<form onSubmit={this.handleSubmit.bind(this)}>
  <input value={this.state.input} onChange={this.handleInput.bind(this)} name="text"/>
  <textarea value={this.state.textarea} onChange={this.handleInput.bind(this)} rows="5" cols="20" name="textarea"/>
  <select value={this.state.select} onChange={this.handleInput.bind(this)} name="select">
    <option value="gr">Gr</option>
    <option value="hr">Hr</option>
  </select>
  <br/>
  同意<input type="checkbox" checked={this.state.checkbox} onChange={this.handleInput.bind(this)} name="checkbox"/>
  <br/>
  男<input name="goodRadio" type="radio" value="boy" onChange={this.handleInput.bind(this)}/>
  女<input name="goodRadio" type="radio" value="gril" onChange={this.handleInput.bind(this)} defaultChecked/>
  <br/>
  <button>提交</button>
</form>
```

trim() 去掉字符串首尾的空格  
<input type='number'/>  只能输入数字  
<input type='range' max='100' min='10'/>  滑动条

#### JSON
JSON格式最后一项不能加括号，数据类型永远是字符串   
JSON.stringify() 把正常的js对象或数组转换成JSON字符串
```js
let obj = {name:'tian'};
console.log(JSON.stringify(obj));
```
JSON.parse()  把JSON对象转换成正常的js变量
```js
let jsonStr = '{"name":"tian"}';
let o = JSON.parse(jsonStr);
```

保存一个本地的储存
localStorage.aaa=‘ooo’  
localStorage.setItem('aaa','ooo')
获得本地储存的数据
localStorage.aaa   
localStorage.getItem('aaa')
删除本地缓存  
localStorage.removeItem('aaa')
