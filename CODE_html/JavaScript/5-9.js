window.onload=function(){
    str=prompt("请你输入一个数值,例如3.14","");
    if(isNaN(str)){
        document.write("您输入的数据类型不对!");
    }
    else{
        document.write("你输入的类型正确!")
    }
}
             