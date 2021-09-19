var i,sum;
i = 1;
sum = 0;
do{
    sum += i;
    document.write(i," ",sum*100,"<br/>");
    document.write("i小于10条件不成立，但本循环体却执行一次!");
    i++;
}while(i>10);