#include<stdio.h>
#include<stdlib.h>
int main(int argc, char *argv[]) {
    FILE *p = NULL;
    if(argc != 2) {
        printf("命令行格式错误!");
        exit(1);
    }
    p = fopen(argv[1],"w");
    if(p == NULL) {
        printf("File open error!");
        exit(1);
    }
    char c;
    while(1) {
        c = getchar();
        if(c == '$') {
            break;
        }
        fputc(c,p);
    }
    fclose(p);
    system("PAUSE");
    return 0;
}