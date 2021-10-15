#include<stdio.h>
#include<stdlib.h>
int main() {
    char c;
    char operation;
    float number1 = 0.0;
    float number2 = 0.0;
    float f = 0.1;
    int i = 0;
    int flag = 1;
    printf("Enter the calculation\n");
    while((c = getchar()) != '=') {
        if(c == '+' || c == '-' || c == '*' || c == '/' || c == '%') {
            operation = c;
            i = 0;
            f = 0.1;
            flag = 2;
        } else if('0' <=c && c <= '9') {
            if(flag == 1) {
                number1 += f*(c-'0');
            } else {
                number2 += f*(c-'0');
            }
            f /= 10;
            i++;
        } else if(c == '.') {
            int j = 0;
            if(flag == 1) {
                for(;j < i; j++) {
                    number1 = number1 * 10;
                }
            } else {
                for(;j < i; j++) {
                    number2 = number2 * 10;
                }
            }
            f = 0.1;
        } else {

        }
    }
    switch(operation) {
		case '+': printf("=%lf\n",number1+number2); break;
        case '-': printf("=%lf\n",number1-number2); break;
		case '*': printf("=%lf\n",number1*number2); break;
		case '/': 
            if(number2 == 0) {
                printf("\n\n\aDivision by zero error!\n");
            } else {
                printf("=%lf\n",number1/number2);break;
            } break;
        case '%':
            if ((long)number2 == 0) {
                printf("\n\n\aDivision by zero error!\n");
            } else {
                printf("=%ld\n",(long)number1 % (long)number2);
            } break;
		default: printf("\n\n\aIllegal operation!\n"); break;
	}
    system("PAUSE");
    return 0;
}
