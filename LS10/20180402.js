//作用域就是变量与函数的可访问范围（变量生效的区域范围，即在何处可以被访问到）
//作用域控制着变量与函数的可见性和生命周期，它也是根据名称查找变量的一套规则
//全局作用
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);
    function bar() {            //变量d只能在bar作用域中被访问到
        //bar局部作用域          //变量c只能在fn和bar作用域中被访问到
        var a = 500,            //在bar中访问a时为500（覆盖性）
            d = 600;            //在bar中访问c时为200（链式关系）
        console.log(a,b,c,d);
    }
    bar();
}
fn();

//JS作用域及其特点
//JS采用的是词法作用域（静态性），这种静态结构决定了一个变量的作用域
//词法作用域不会被函数从哪里调用等因素影响，与调用形式无关（体现了静态性）

var name = "Jack";
function echo() {
    console.log(name);
}
echo();//Jack

//词法作用域 与调用形式无关 实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack

//词法作用域 与调用形式无关 实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Jack

//通过new Function创建的函数对象不一定遵从静态词法作用域
//对比下边两个例子（通过不同形式定义的函数对象，访问到的scope的区别）
var scope="global";
function checkScope(){
    var scope="local";
    return function(){
        return scope;
    };  
}
console.log(checkScope()());//结果是local

var scope="global";
function checkScope(){
    var scope="local";
    return new Function("return scope;");
}
console.log(checkScope()());//结果是global
//通过new Function创建的函数对象不一定遵从静态词法作用域


//ES5没有块作用域
//变量污染、变量共享问题,尤其是异步执行的情况下。如果是两个单独的文件的情况下，更容易造成变量污染
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//一长串代码后，假如看不见上述代码了
var a=2,b=3;
if(a<b){
    var userId = 234;
}


//使用IIFE来解决上述问题
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//多人协同开发时问题，块作用域缺陷的问题可能会更加明显
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());


