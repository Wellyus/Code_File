#include<stdio.h>
#define Test
int main(int argc,char * argv[]) {
    #ifdef Test
    for(int i = 0; i < argc; i++) {
        printf("%s\n",argv[i]);
    }
    #endif
    return 0;
}