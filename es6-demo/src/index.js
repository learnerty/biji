// import {str as ccc,obj} from './test.js';
// console.log(ccc,obj);
//
// import aaa from './test.js';
// console.log(aaa)

// var numbers = [1, 4, 9, 15];
// var roots = numbers.map(item => `<p>${item}</p>`);
// console.log(roots)

// [1, 4, 9, 15].forEach(function(item){
//   console.log(item);
//   })

  // let arr = [1, 4, 9, 15];
  // arr.forEach(item => {console.log(item);})

  // let obj = {name:"tian",age:23};
  // for (var variable in obj) {
  //   console.log(variable)
  // }

// let names = Object.keys(obj);
// console.log(names);


// let arr = [
//   {name:'tian',age:23,id:45322},
//   {name:'tian',age:24,id:453222},
//   {name:'tian',age:13,id:4522},
//   {name:'tian',age:32,id:453322}
// ]
// let index = arr.findIndex(item =>item.age ===13)
// console.log(index)


// {
//   let a = 5;
// }
// let a = 6;
//

// const a = {
//   name:'tian'
// }
// a.name='aaa'

// const a = 1;
// a = 3;
// console.log(a)

// let [a,b,c,d] = [5,'aaa',{name:'bbb'},function(){}]
// console.log(a,b,c,d);

// function aa(){
//   return [1,2,3]
// }
// let [a,b,c] = aa();
// console.log(a,b,c);

// let {foo,bar} = {foo:'aaa',bar:'bbb'}
// console.log(foo);
// console.log(bar);

// const [a,b,c,d,e] = 'hello';
// console.log(a+b+c+d+e);

// let name = 'tian';
// let age = '23';
// let say = function(){
//   console.log('say');
// }
// let obj = {
//   name,
//   age,
//   say,
//   run(){
//     console.log('run');
//   }
// }
// console.log(obj);



// let a = () => 8;
// let aa = a();
// console.log(aa)

// let a = (num,num1) => num*num1;
// console.log(a(5,6));

// let a = (num,num1) => {
//   num = ++num
//   num1 = ++num1
//   return num*num1
// }
// console.log(a(5,6));


// let a = (num,num1) => ({name:'a'})
// console.log(a(5,6));

// setTimeout(()=> console.log(55),50)


// let name = 'tian';
// let age = '23';
// let obj = {
//   name:"aaa"
// }
// let str =`<p class="active">${obj.name}姓名:${name.charAt(2)},年龄:${age*2}</p>`;
// document.body.innerHTML = str;


// function sum(num=5){
//   return ++num
// }
// console.log(sum(8));


// function sum({name}){
//   console.log(name)
// }
// sum({name:'tian'});


// function restFunc(a,...rest){
//   console.log(a);
//   console.log(rest);
// }
// restFunc(1)
// restFunc(1,2,3,4)


// [0,1,2,3,4].reduce(function(acc,cur,index,array){
//   console.log(acc,cur);
//   return acc + cur;
// })


// let arr = [12,65,23,15,9];
// let max = arr.reduce(function(acc,cur){
//   return acc>cur? acc : cur
// })
// let max = arr.reduce ((acc,cur) => {
//   return acc>cur? acc : cur
// })
// console.log(max);


// let arr = [0,1,2,3];
// let arr1 = [...arr,4,5];
// console.log(arr1)

// let obj = {a:{b:1}};
// let {...x} = obj;
// console.log(x);


// class Point {
//   constructor(x,y){
//     this.x = x;
//     this.y = y;
//   }
//   toString(){
//     console.log('Point toString');
//   }
// }
// var p = new Point();
// console.log(p);


// class Po{
//   constructor(x){
//     this.x = x;
//   }
//   toString(){
//     console.log('Po toString');
//   }
// }
//
// class Po1 extends Po{
//   constructor(a,b,x){
//     super(x);
//     this.a = a;
//     this.b = b;
//   }
//   say(){
//     console.log('Po1 say');
//   }
// }
// var p = new Po1(5,6,7);
// console.log(p);
// p.toString();
// p.say();

// function Point1 (x,y){
//   this.x = x;
//   this.y = y;
// }
// Point1.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// };
// var p1 = new Point1(4,9);
// console.log(p1);


class Father {
  _render(){
    throw new Error('子类必须实现')
  }
  render(){
    return (
    `<ul>
      ${this._render()}
    </ul>`)
  }
}

class Son extends Father {
  _render(){
    return (`<li>hhhh</li>`)
  }
}
var son = new Son();
console.log(son.render());
document.body.innerHTML = son.render();
