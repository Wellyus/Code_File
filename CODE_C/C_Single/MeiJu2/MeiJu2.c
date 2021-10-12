#include<stdio.h>
#include<stdlib.h>
int main() {
    int *p = NULL;
    p = (int *)malloc(7);
    if(p == NULL) {
        exit(1);
    }
    p = 1234;
    
    for(int i = 0; i < 6; i++) {
        printf("%d %p\n",*(p+i),p+i);
    }
    system("PAUSE");
    return 0;
}
