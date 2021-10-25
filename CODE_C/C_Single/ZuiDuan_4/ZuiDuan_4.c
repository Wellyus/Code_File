#include<stdio.h>
#include<stdlib.h>
int main(void)
{
	char a;
    //i为0-127的ascall
    for (int i = 0; i < 127; i++) {
        a = i;  
        printf("%d %c",a,a);
        printf("\n");
    }
    return 0;
}