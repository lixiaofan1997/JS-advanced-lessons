function foo(){}
console.log(foo); //
console.log(typeof foo); //Function
//函数对象对应的类型是Function（类似于数组对象对应于Array、日期对象对应于Date）
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true


//内置的函数对象（Array、Function、Date等），内置的非函数对象（Math、JSON）
console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object

//
console.log(typeof new Function());// function
console.log(typeof new Array());   // object
console.log(typeof new Date());	   // object

//
console.log(Function instanceof Function);//第一个Function是构造函数
console.log(Function instanceof Object);  //

console.log(Array instanceof Function);//第一个Array是构造函数
console.log(Array instanceof Object);

console.log(Date instanceof Function);
console.log(Date instanceof Object);

console.log(Math instanceof Function);
console.log(Math instanceof Object);

console.log(JSON instanceof Function);
console.log(JSON instanceof Object);

var a=new Array(5);
console.log(a);//创建一个长度为5的数组

//函数对象属性之length 形参个数
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        alert("The count of the parameters you passed into the function doesn't match the function definition.");
    }else{
        alert("Successfully call the function");
    }

}
checkVarCount(1, 2);
//Successfully call the function
checkVarCount(1);
//The count of the parameters you passed into the function doesn't match the function definition.

//函数对象属性之arguments 实参集合（类似数组的一个对象）
var foo = function (a,b){
    console.log(arguments);//类似数组的一个对象
    //arguments 是Symbol类型，独一无二的，具体参见后续ES6部分
    console.log(arguments === test.arguments);

    console.log(arguments.length);
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);
};
foo(1,2,3,4);//arguments.length 实参数量


//函数对象属性之caller 获取调用当前函数的函数。例一
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);

test();//output: test is called from ,call from the top level

function testOuter() {
    test();
}
testOuter();//call from the function testOuter
//caller是函数对象的一个属性，指向当前函数的直接父函数


//例二
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();
obj.foo2();

//函数对象属性之callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));

//函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true

//函数对象方法之 apply
//functionName.apply([thisObj[,argArray]])
//与call方法不同的地方是，apply的第二个参数类型必须是Array
swim.apply(me,[9,10]);
bird.fly.apply(me,[11,12]);
swim.apply(null,[13,14]);


//bind绑定
//关于绑定 例一
//下述代码输出结果为（     ）
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();//var fee = foo.bind(this); fee();
		foo();
    }
};
obj.test();

// 高阶函数
// 实例一 高阶函数一般应用 01
function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});
add(2,-3,Math.abs);//
add(2,3,Math.sqrt);//2的开平方加3的开平方

//练习使用高阶函数实现下述公式，要求函数复用
//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);

function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4


