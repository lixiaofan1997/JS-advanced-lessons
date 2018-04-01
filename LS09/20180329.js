//
console.log(a);
var a = 1;
console.log(a);

//上边代码等价如下 解析器眼中的代码
var a;  //var a往上提
console.log(a);
a = 1;
console.log(a);

//思考如下代码输出什么 值类型
console.log(a,b);//输出undefined undefined
var b = 23;
console.log(a,b);//输出undefined  23
var a = b;
console.log(a,b);//输出23   23

//思考如下代码输出什么 引用类型
console.log(obj1,obj2);//输出什么
var obj1 = {x:23};
console.log(obj1,obj2);//输出什么
var obj2 = obj1;
console.log(obj1,obj2);//输出什么
obj2.x =25;
console.log(obj1,obj2);//输出什么


// Part 22222222222222222
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){//function往上提
    console.log("f_1");
}
function foo(){//function往上提
    console.log("f_2");
}
foo();//f_2


// Part 3333 同时有var和function的情况一
foo();
var foo = function(){
    console.log("foo");
};
//上述代码等价于
var foo;//当function前有运算符的话，认定为表达式，function不提升
foo();
foo = function(){
    console.log("foo");
};

//以下代码是否会报错，写出这段代码的等价形式
console.log(foo);//输出什么
var foo = function(){
    console.log("foo");
};
foo();
//输出结果:
//undefined
//foo



// Part 同时有var和function关键字时
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

//上边代码等价如下，function往上提，var AA往上提
function AA(){
    console.log("AA_1");
}
var AA;//var AA；相当于无效，因为前面已经声明了AA了。同名，已有变量不会进行二次声明

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();

//词法作用域 与调用形式无关 详细内容参见作用域部分
//JS采用的是静态词法作用域，代码完成后作用域链就已形成，与代码的执行顺序无关
//静态词法，函数定义的地方往上找

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Bill or Jack

//全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    //var x = "inside f1";//如果没有这行，则两次输出都为outside
    console.log(x);
};
f1();
console.log(x);

//若函数内未加var 则相当于创建了全局变量
var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
f2();
console.log(y);//若函数内有var此行报错，若函数内没有var则此行输出全局变量y值

//ES5中无块作用域
if(true){
    var z = 23;
}
console.log(z);//正常输出

if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//报错


//声明前置与作用域

if(true){
    var i = 0;
}
function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错

//上边代码等价于
var i;//var i冲出if函数块
if(true){
    i = 0;
}

function foo(){//var j=10;在function内提升到前面
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错