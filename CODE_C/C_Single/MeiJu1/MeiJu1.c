#include<stdio.h>
#include<stdlib.h>
int main(int argc, char *argv[]) {
    FILE *p;
    p = fopen("test.c","w");
    if(p == NULL) {
        printf("file open error!");
        exit(1);
    }
    fputc('A',p);
    fputs("BCDEFG",p);
    char *d = "HIJKLMN";
    int a = 1;
    fprintf(p,"%s\n%d",d,a);
    fclose(p);
    system("PAUSE");
    return 0;
}