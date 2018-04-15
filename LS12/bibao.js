//闭包实例 Part 1111111111111111
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());


function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//输出多少？
f();//输出多少？


// 闭包实例
// 函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除
// 原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，
// 这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，
// 不会在调用结束后，被垃圾回收机制（garbage collection）回收
var n = 10;
function f1(){
    var n=999;
    nAdd=function(){n+=1;};//思考：nAdd是闭包么? n是哪个作用域下的变量
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // 输出多少？
nAdd();
result(); // 输出多少？


////////闭包 应用案例 实现数据的封装 私有属性
function Person(){
    var name = "default";
    return {
        getName : function(){
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName());
john.setName("john");
console.log(john.getName());

var jack = Person();
console.log(jack.getName());
jack.setName("jack");
console.log(jack.getName());

/////
var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
document.onclick = result1; // 输出多少？
nAdd();
result2(); // 输出多少


//////
var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
result1(); // 输出多少？
nAdd();
result2(); // 输出多少
result1();

//Part 11111111111111//////////////////
var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？
function foo(x) {
    var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//
fee(10);//
fee(10);//


//闭包嵌套，扩展知识（了解即可），思考下述代码中存在几个闭包，设置断点调试
function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//设置断点，查看有几个闭包
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);
f3(10);
//思考有几个闭包，x和z分别属于哪个闭包


//Part 2222222222222//////////////////
function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); //输出什么？
bar(10); //输出什么？
bar(10); //输出什么？


// Part 33333333333
function fn() {
    var max = 10;//若屏蔽此行，则输出为多少？
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);