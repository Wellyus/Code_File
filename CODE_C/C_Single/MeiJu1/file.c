#include<stdio.h>
#include<stdlib.h>
int main(int argc, char *argv[]) {
    double number1 = 0.0;
    double f = 0.1;
    int i = 0;
    char c;
    char operation;
    fflush(stdin);
    while((c = getchar())!='=') {
        /*if(c=='+'||c=='-'||c=='*'||c=='/'||c=='%') {
            operation = c;
            continue;
        }
        if(c=='.') {
            for(int j = 0; j < i; j++) {
                number1*=10;
            }
            f = 0.1;
            i = 0;
            continue;
        }*/
        //123.12+
        if('0'<c<'9') {
            number1 = number1 + (c - '0')*f;
            f /= 10;
            i++;
        }
        if(c=='.') {
            for(int j = 0; j < i; j++) {
                number1 *= 10;
            }
            f = 0.1;
            i = 0;
        }
    }
    printf("%lf",number1);
    system("PAUSE");
    return 0;
}