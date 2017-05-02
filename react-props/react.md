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
