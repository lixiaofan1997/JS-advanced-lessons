//ppt23  JSON
// JS中一切都是对象（如何理解这句话），任何支持的类型都可以通过对象来表示
// JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串
// JSON 可以以字符串的形式表示 JS基本数据类型变量和对象（引用）类型变量

var obj1 = "xxx";
var obj2 = 23;
var obj3 = false;
var obj4 = { x: 1, y: 2, a: [1, 3, 5], b: "xyz" };
var obj5 = [123, 345];
var obj6 = [{ z: 3 }, [1, 2]];
var obj7 = {x:true};

var json1 = '"xxx"';
var json2 = '23';
var json3 = 'false';
var json4 = '{"x":1,"y":2,"a":[1,3,5],"b":"xyz"}';
var json5 = '[123,345]';//注意区别于：'["123","345"]'
var json6 = '[{"z":3},[1,2]]';
var json7 = '{"x":true}';//注意区别于：'{"x":"true"}'

//练习：写几个json对象，数组，对象，数字，字符等等
var j1 = '[{"name":"jack","obj":{"x":1,"y":2},"arr":[1,2,"3"]},2]';
var j2 = '{"x":1,"y":"2"}';

//查看一下 api.github.com 返回的json数据

//思考：以上实例传递的都是属性，方法如何传递？回顾Function构造函数和创建函数的3种方式
var foo = new Function("x","y","return x>y?x:y;");
foo(2,3);


//var jf = '["x","y","return x<y?x:y;"]';
var af = ["x","y","return x<y?x:y;"];
var fee = new Function(af[0],af[1],af[2]);
fee(2,3);



// Part11111111111111111 JSON.stringfiy的基本用法
// JSON.stringify 案例一 复合对象转换为字符串
var o1 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
    d:5,
    e:{name:"Jack"},
    f:function(){console.log(12);}, //注意函数序列化问题
    h:0x12
};
var jsonStr1 = JSON.stringify(o1);
console.log(jsonStr1);
console.log(o1);

// JSON.stringify 案例二 复合数组转换为字符串
var a1 = [1,"x",true,{y:2,z:3}];//对比 ["1","x","true",{y:"2",z:3}]
var jsonStrArr1 = JSON.stringify(a1);
console.log(jsonStrArr1);
console.log(a1);


JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: 5, y: 6});              
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); 
// '[1,"false",false]'

JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);          
// '[null,null,null]' 

// 不可枚举的属性默认会被忽略：
JSON.stringify( 
    Object.create(
        null, 
        { 
            x: { value: 'x', enumerable: false }, 
            y: { value: 'y', enumerable: true } 
        }
    )
);

// Part2222222222222222 JSON.parse的基本用法
// JSON.parse的用法 案例一
var jsonStr3 = '{"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"}}';
var jsonStr4 = '[1,"x",true,{"y":2,"z":3}]';
var jsonStr5 = '{"a":[1,2],"b":false,"c":[3,4,"x",{"y":34,"z":56}]}';

var o3 = JSON.parse(jsonStr3);
var o4 = JSON.parse(jsonStr4);
//reviver参数是可选的，是一个节点访问函数，可用来转换解析后的数据
var o5 = JSON.parse(jsonStr5,function (key,value) {
    if(typeof value === "boolean"){
        value = "ChangeToString";
    }
    if(key == "c"){//迭代的遍历某个希望寻找的数据属性，可用于数据信息的查找
        console.log("c:",value);
    }
    return value;
});
console.log(o3);
console.log(o4);
console.log(o5);

//其他案例
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
JSON.parse('1');               //  1

