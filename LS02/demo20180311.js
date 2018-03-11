//typeof 判断类型
console.log(typeof null);//结果是object
console.log(typeof undefined);//结果是undefined
console.log(typeof function fun(){});//结果是function

console.log(typeof Array);//结果是function
console.log(typeof Function);//结果是function
console.log(typeof Date);//结果是function
console.log(typeof Number);//结果是function

//instanceof判断类型
var a={name:"Mike",age:20};
console.log(a instanceof object);//结果为true

//=== 与 == 的判断
//例一
var a=new Number(200);
var b=a;
console.log(a==b);
console.log(a===b);
b=new Number(200);
console.log(a===b);

//例二
var a=new Number(200);
var b=200;
console.log(a==b);
console.log(a===b);

//例三
var a={x:1,y:2};
var b={x:1,y:2};
console.log(a===b);
console.log(a.x===b.x);


