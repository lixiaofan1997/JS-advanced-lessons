var num1=125;
var num2=125.268;
console.log(parseInt(num2));//125 
console.log(parseFloat("125.268xy"));//结果为125.268

//parseInt和parseFloat都是window全局对象的方法
console.log(parseInt === window.parseInt);
console.log(parseFloat === window.parseFloat);

var x=Number("xs1688");//试着转成Number类型
console.log(x);//NaN
isNaN(x);//true  isNaN()判断其参数是否是 NaN     
typeof NaN;//number

var a2 = 23.4;
console.log(Math.ceil(a2));//24 对数进行上舍入
console.log(Math.floor(a2));//23 对数进行下舍入
console.log(Math.round(a2));//23  把数四舍五入为最接近的整数
a3 = 5e2;
console.log(a3);//结果是500
console.log(typeof Math);//结果是 object

console.log(Math.log(-1));//NaN  返回数的自然对数（底为e）
console.log(Math.acos(2));//NaN  返回数的反余弦值。
console.log(Math.cos(0));//1  返回数的余弦值。

console.log(NaN === NaN);//false
console.log(NaN == NaN);//false

//Infinity与-Infinity
var y1 = 2/0;
console.log(y1);//Infinity  正无穷大
var y2 = -2/0;
console.log(y2);//-Infinity 负无穷大
//isFinite() 函数用于检查其参数是否是无穷大。
//如果 number 是有限数字（或可转换为有限数字），那么返回 true。
//否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。
isFinite(y2);//false，非有限数
isFinite(23);//true，有限数

//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0



