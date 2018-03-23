//前++，执行语句前++
//后++，执行语句后++

//+=转换成字符串类型
//++转换成数字类型
//==引用类型向基本类型准换
//==引用是否指向同一对象

console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3

//注意++、--的隐式类型转换
var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
console.log(x+1);//11

//
var i=1;
var y = ++i + ++i + ++i;
console.log(y);

console.log(3===3);
console.log(3==="3");
console.log(3=="3");
console.log(3==new String(3));
console.log(3===new String(3));

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1 == new String("xyz"));

//！=取反  ！==取反
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);
console.log(obj1 !== obj2);
console.log(obj1 != obj2);
console.log(obj1 != new String("xyz"));

console.log(2 == 2);
console.log(new Number(2) == new Number(2));
console.log(2 == new Number(2));
//&& 和||的用法

console.log(2>1&&4<5);
console.log(true&&(!2));
console.log(false&&("2" == 2));
console.log(false&&false);

console.log(2>1||4<5);
console.log(true||(!2));
console.log(false||("2" == 2));
console.log(false||false);
/*
当逻辑运算符&&和||两侧的操作数不是布尔类型时，
-首先将左操作数转换成布尔类型
-对转换后的左操作数进行逻辑判断（true or false）
-根据短路原则返回原始左操作数或原始右操作数
*/
/*
短路原则（忽略对右操作数的判断）
- 对于&&，转换后的左操作数若为true，则直接返回原始右操作数，若为false则
  直接返回原始左操作数
- 对于||，转换后的左操作数若为true，则直接返回原始左操作数，若为false则直
接返回原始右操作数
- 通过短路原则，可以用&&和| |来实现复杂的条件语句来代替if-else
*/

//操作数非布尔类型，&&短路原则
console.log(2&&4);
console.log(0&&4);
console.log({x:2}&&{name:"Jack"});
console.log(null&&"hello");
console.log({}&&"world");

//操作数非布尔类型，||短路原则
console.log(2||4);
console.log(0||4);
console.log({x:2}||{name:"Jack"});
console.log(null||"hello");
console.log({}||"world");

//思考 所有对象转换为布尔类型 都为 true
console.log((new Boolean(false))&&234);
console.log((new Boolean(false))||234);

//判断成绩等级的函数
var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}
//通过&&和||的组合实现如上功能，（小括号优先级最高）
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");


//进行加法计算的函数
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
// console.log(sum(1,0,0));

//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));