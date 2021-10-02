#include<stdio.h>
int main(void) {
    int choice;
    int result;
    printf("please input your choice: 1 for 新建，2 for 扩建, 3 for 转包");
    scanf("%d",&choice);
    if(choice==1) {
        result = 1;
        printf("your income is %d",result);
    }
    return 0;
}