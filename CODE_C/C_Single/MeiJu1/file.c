#include<stdio.h>
#include<stdlib.h>
int main(int argc, char *argv[]) {
    FILE *p;
    p = fopen("test.c","r");
    if(p == NULL) {
        printf("file open error!");
        exit(1);
    }
    rewind(p);
    fseek(p,0,2);
    int a = ftell(p);
    printf("%d\n",a);
    fclose(p);
    system("PAUSE");
    return 0;
}