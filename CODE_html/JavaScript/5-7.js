i = 0;
count = 0;
while(i<100){
    if(i%2==0||i%3==0){
        i++;
        continue;
    }
    count++;
    if(count==8){
        document.write("<br/>");
        count = 0;
    }
    document.write(i," ");
    i++;
}