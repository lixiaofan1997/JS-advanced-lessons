//arguments，如果输入实参多于形参，用arguments输出
//与其他程序设计语言不同，ECMAScript 不会验证传递给函数的参数个数是否等于函数定义的参数个数。

//避免代码的二义性
function foo(){
    var a=b=3;
}
foo();
console.log("b:",b);
console.log("a:",a);
/*相当于var a=3; a是局部变量,访问不到
            b=3; b是全局变量      
*/


//ES5中没有块作用域
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);

if(true){
    var a=20;//没有定义在块内，相当于冲破了块
}
console.log(a);

//严格模式与非严格模式
/*严格模式的目的
    - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
    - 消除代码运行的一些不安全之处，保证代码运行的安全
    - 提高编译器效率，增加运行速度
*/
/*
启用严格模式的方式
- 针对整个脚本文件使用 'use strict'
- 针对函数使用 'use strict'
*/
//严格模式下全局变量定义需要显示声明

//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    //'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);

//this严格模式是undefined，非严格模式是window

//严格模式下禁止函数参数重名
//严格模式下禁止删除不可改变的属性的变量
//严格模式下禁止删除未定义的变量

//switch
// switch 语句在比较值时使用的是全等操作符(===),因此不会发生隐式类型转换
//switch穿透性
