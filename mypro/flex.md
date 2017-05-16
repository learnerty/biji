弹性布局`display: flex;` 采用Flex布局的元素，称为Flex容器，它的一级子元素成为Flex项目，容器默认存在两根轴：水平的主轴和垂直的交叉轴，默认为主轴，项目多高，容器就多高  
```
.box{
  height: 100px;
  display: flex;  改变成弹性盒子
  flex-direction:row; 默认主轴为水平方向，起点在左端
  flex-direction:row-reverse; 主轴为水平方向，起点在右端
  flex-direction:column; 主轴为垂直方向，起点在上沿
  flex-direction:column-reverse;  主轴为垂直方向，起点在下沿
  flex-wrap:nowrap; 默认，不换行
  flex-wrap:wrap; 排不下换行，第一行在上方
  flex-wrap:wrap-reverse; 排不下换行，最后一行在上方
  flex-flow: column wrap; 垂直上，换行第一行在上，flex-direction和flex-wrap的简写
  justify-content:flex-start; 对齐方式：默认，左对齐
  justify-content:flex-end;  右对齐
  justify-content:center;  居中
  justify-content:space-between;   两端对齐，项目之间的间隔都相等
  justify-content:space-around; 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
  align-items:flex-start;  交叉轴的起点对齐
  align-items:flex-end;  交叉轴的终点对齐
  align-items:center;  交叉轴的居中对齐
  align-items:baseline; 项目的第一行文字的基线对齐
  align-items:stretch; 默认，如果项目未设置高度或设为auto，将占满整个容器的高度
  align-content: flex-start | flex-end | center | space-between | space-around | stretch; 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
}
.box1{
  order:0; 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
  flex-grow:1; 给项目加的属性，项目的放大比例，剩多少占多少,默认为0，不放大
  flex-shrink:0; 项目的缩小比例，默认为1，0不缩小
  flex-basis:25%;  项目占据的主轴空间,默认为auto
  flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
  align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
}
<div class="box">
  <div class="box1">11111111</div>
  <div class="box2">22222222</div>
</div>
```
