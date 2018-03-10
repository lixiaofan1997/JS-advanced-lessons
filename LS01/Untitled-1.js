//数组去重
function select(a){
    var arr=new Array();
    for(var i=0;i<a.length;i++)
    {
        if(arr.indexOf(a[i])==-1)//判断是否已存在
        {
            arr.push(a[i]);
        }
    }
    //数组排序,冒泡排序
    for(m=0;m<arr.length-1;m++)
    {
        for(n=0;n<arr.length-1-m;n++)
        {
            if(arr[n]>arr[n+1])
            {
                var temp;
                temp=arr[n+1];
                arr[n+1]=arr[n];
                arr[n]=temp;
            }
        }
    }
    // for(var j in arr){
    //     console.log(arr[j]+",");
    // }
    console.log(arr);
}
var num1=[1,2,3,2,3,4,7,1,5,8];
select(num1);