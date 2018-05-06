//18.JS标准内置对象-构造器（Array）
//创建数组的不同方式
var arr1 = [1,2,3,"4"];

var arr2 = new Array(5);//思考var arr2 = new Array("5");
console.log(arr2);
for(var i=0;i<arr2.length;i++){arr2[i] = i;}

var arr3 = new Array(1,2,3,4);//多个参数
console.log(arr1,arr2,arr3);

//数组直接量中的值不一定要是常量，可以是任意的表达式
var base = 1024;
var table = [base,base+1,base+2,base+3];
//也可包含对象直接量或其他数组直接量
var b = [[1,{y:2}],[2,{x:3}]];

//回顾数据类型思考：
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);


//Error
function idLog(x){
    try{
        var arr = new Array(-1);
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("222");
    }
}
idLog(123);

//使用map和reduce来实现，数组求平均值和标准差
//不用map和reduce的写法
var data = [1,1,3,5,5];
var total = 0;
for(var i=0;i<data.length;i++){
    total += data[i];
}
var average = total/data.length;
total = 0;
for(var i=0;i<data.length;i++){
    var deviation = data[i]-average;
    total+=deviation*deviation;
}
var stddev = Math.sqrt(total/(data.length-1));


//使用map和reduce的写法
var data = [1,1,3,5,5];
function sum(x,y) {return x+y;}
var average = data.reduce(sum)/data.length;

function deviation(x) {return x-average;}
var tempArr = data.map(deviation);
total = 0;
function square(x) {return x*x;}
total = tempArr.map(square).reduce(function (x,y) {
    return x+y;
});
var stddev = Math.sqrt(total/(data.length-1));

//使用map和reduce的精简写法
var data = [1,1,3,5,5];
var average = data.reduce(function(x,y) {return x+y;})/data.length;
var tempArr = data.map(function(x) {return x-average;});
total = 0;
total = tempArr.map(function(x) {return x*x;}).reduce(function (x,y) {
    return x+y;
});
var stddev = Math.sqrt(total/(data.length-1));

/*
//使用ES6中的箭头函数，会更为精简，详细内容参见ES6部分
var data = [1,1,3,5,5];
var average = data.reduce((x,y)=>{return x+y;})/data.length;
var tempArr = data.map((x)=>{return x-average;});
total = 0;
total = tempArr.map((x)=>{return x*x;}).reduce((x,y)=>{return x+y;});
var stddev = Math.sqrt(total/(data.length-1));
*/

// Part11111111
//增删改查
var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素，通过方法添加元素参见后续章节
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删：思考此时数组长度是2还是3？如何彻底删除？直接修改length与pop方法
console.log("删除a[2]后的数组a",a);
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查:看数组中的元素，索引从0开始

//思考
i = 2;
a[i] = 3;//
a[i+1] = "YY";
a[a[i]] = a[0];
console.log(a);//输出什么？

// Part22222222
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);
console.log(a);

var a1 = [,"abc"];
console.log(a1.length);

for(var i in a1){
    console.log(i,a1[i]);//输出几个元素
}
console.log(0 in a1,1 in a1);

var a2 = new Array(3);
console.log(a2.length);
console.log(a2);

//注意：
var a3 = [,,];
console.log(a3.length);

console.log(["a","b"].length);
console.log(["a","b",].length);
console.log(["a","b",,].length);

// 多维数组 实例一 矩形数组和交错数组
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);




// 合并一起的写法
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
var product = table[2][4];
console.log(table);

//Part1  数组的静态方法
const bar = ["a", "b", "c"];
Array.from(bar);// ["a", "b", "c"]
Array.from('foo');// ["f", "o", "o"]

Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

var arr1 = [1,3,4];
console.log(Array.isArray(arr1));

function foo(){
    console.log(Array.isArray(arguments));
    //console.log(arguments.pop());//这样是否能调用？数组与类数组对象
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);

//Part2  数组添加删除元素的原型方法 破坏性
//Array.prototype.shift
var arr2 = [1,3,5,7];
var shiftElement = arr2.shift();//返回去除的元素
console.log(shiftElement,arr2);

var newLength = arr2.unshift(1,2);//返回新的数组长度
console.log(newLength,arr2);

var popElement = arr2.pop();//返回pop出去的元素
console.log(popElement,arr2);

var newLength = arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2);

//思考：如何通过push将两个数组组合成一个数组
var arr3 = ["a","b"];
var arr4 = ["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);

//splice 从start开始，移除deleteCount个元素，并插入给定的元素
var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");//返回切掉的数组
console.log(spliceElements,arr5);
//思考start若是负数则返回什么？：arr5.splice(-2,2,"x");



//Part11111111 排序和颠倒元素顺序 破坏性
//Array.prototype.reverse()
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);

//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);

//思考sort中的参数
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//结果是否是预计结果,如何解决

//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序
/*
//避免数字溢出的写法
arr3.sort(function (a,b) {
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }else {
        return 0;
    }
});
*/
//如果想让arr2按第二个字母排序，怎么写？
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);


//Part222222 合并、切分和连接 非破坏性
//Array.prototype.concat(arr1?,arr2?,...)
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);

//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);
console.log(newArray,arr6);
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6);

//Array.prototype.join(separator?)
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");//返回了个什么类型？
console.log(joinReturn,arr7);
console.log(typeof joinReturn);
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));

//Part333333333 值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//输出几？
console.log(arr8.indexOf(5,3));//输出几？
console.log(arr8.indexOf(5,5));//输出几？

//Array.prototype.lastIndexOf(searchElement,startIndex?)
console.log(arr8.lastIndexOf(5));//输出几？
console.log(arr8.lastIndexOf(5,3));//输出几？
console.log(arr8.lastIndexOf(5,5));//输出几？

//Part1111111 数组原型方法（迭代-非破坏性-检测方法）thisValue可以指定callback中的this
// Array.prototype.forEach(callback,thisValue?) //注意并不返回新的数组
var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a);
    }else {
        console.log(a,"不大于3");
    }
});
console.log(arr1);

// Array.prototype.every(callback,thisValue?) //返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.every(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    return a%2===0;
});
console.log(returnValue);

// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    return a%2===0;
});
console.log(returnValue);


//Part2222222 数组原型方法（迭代-非破坏性-转换方法）
// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);

// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);


//Part3333333 数组原型方法（迭代-非破坏性-归约方法）
// Array.prototype.reduce(element,initialValue?) //从左向右迭代
// 对reduce的解读 ((((x1 op x2) op x3) op x4)...xn)
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));

//综合实例
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs,"x"));

//思考案例：
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);


//思考案例：计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }