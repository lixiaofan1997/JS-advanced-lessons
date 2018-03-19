//可以使用关键词 new 来定义 Boolean 对象
//var myBoolean=new Boolean()
//
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean({}));

if(new Boolean(false)){
    console.log("执行");
}

//
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("abc"));
console.log(Number("123.345xx"));//
console.log(Number("32343,345xx"));
console.log(Number({x:1,y:2}));

console.log(parseFloat("123.345xx"));
console.log(parseFloat("32343,345xx"));
console.log(parseInt("123.345xx"));
console.log(parseInt("32343,345xx"));

//
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));
console.log(String(0));
console.log(String(234));
console.log(String({x:1,y:2}));

//
console.log(NaN === NaN);
console.log(isNaN("12,3"));
console.log(Math.floor(3.8));
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));
console.log(Math.ceil(-3.2));
console.log(Math.round(-3.2));
console.log(Math.round(-3.5));
console.log(Math.round(-3.8));

//prototype 属性来向对象添加属性：
//NumberObject.toFixed(num)，可把 Number 四舍五入为指定小数位数的数字
//toPrecision() 方法可在对象的值超出指定位数时将其转换为指数计数法。
//toString() 方法可把一个逻辑值转换为字符串，并返回结果
//toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
//toExponential() 方法可把对象的值转换成指数计数法。
var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));
