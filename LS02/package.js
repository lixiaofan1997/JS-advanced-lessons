//包装 
var  str="lixiaofan";
console.log(str.length);//值为9，临时包装成了string对象。
str.length=1;//使用完后即拆箱
console.log(str.length,str);//9  lixiaofan 临时包装对象并不影响原始值

var arr=[1,2,3,4,5,6,7];
console.log(arr.length);//值为7
arr.length=1;
console.log(arr.length,arr);//  1  [1]

