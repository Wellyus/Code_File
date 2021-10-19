#include<stdio.h>
#define MATH
#define message_for(a,b) \
    printf(#a " and " #b "\n")
int main(void) {
    #ifdef message_for
        message_for("m1","m2");
        printf("File :%s\n",__FILE__);
        printf("Date :%s\n",__DATE__);
        printf("Time :%s\n",__TIME__);
        printf("Line :%d\n",__LINE__);
    #endif
    #if defined(MATH) 
    {
        printf("MATH is defined!");
    }
    #endif
    return 0;
}