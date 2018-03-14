var str = "abc_def_ghi_jkl_mn";
//split把一个字符串分割成字符串数组。
//stringObject.split(separator,howmany)
//separator 该参数指定的地方分割;howmany 可选 返回的子串的数量
str.split("_");//["abc", "def", "ghi", "jkl", "mn"]
str.split("_",2);//["abc", "def"]

//concat连接
str.concat("_opq");//"abc_def_ghi_jkl_mn_opq"

//substr获取从下标开始指定长度的字符，stringObject.substr(start,length)
str.substr(4,7);//"def_ghi"

//substring提取字符串中介于两个指定下标之间的字符
//stringObject.substring(start,stop)
//start 要提取的字符的下标，stop 提取的字符的下标多1
str.substring(4,7);

//slice stringObject.slice(start,end)   返回从start到end（不包括该元素）
/*
start要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。
也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。
*/
/*
end 要抽取的片段的结尾的下标的后面一个。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。
如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
*/
var str = "abc_def_ghi_jkl_mn";
str.slice(2);//"c_def_ghi_jkl_mn"
str.slice(2,5);//"c_d"
str.slice(-2);//"mn"
str.slice(2,-2);//"c_def_ghi_jkl_"

str.bold();
str.link();
str.fontcolor("red");
str.fontsize(50);


