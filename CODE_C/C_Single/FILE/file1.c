#include<stdio.h>
#include<stdlib.h>
//�ļ�����
int main(int argc, char *argv[]) {
    FILE *p = NULL;
    FILE *q = NULL;
    p = fopen(argv[1],"r");
    if(argc !=3 ) {
        printf("�����и�ʽ����!");
        exit(1);
    }
    if(p == NULL) {
        printf("File_p open error!");
        exit(1);
    }
    q = fopen(argv[2],"w");
    if(q == NULL) {
        printf("File_q open error!");
        exit(1);
    }
    while(!feof(p)) {
        char c = fgetc(p);
        fputc(c,q);
    }
    fclose(p);
    fclose(q);
    system("PAUSE");
    return 0;
}