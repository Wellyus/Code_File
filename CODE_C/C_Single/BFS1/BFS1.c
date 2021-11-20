#include<stdio.h>
#include<stdlib.h>
int main(void)
{
    double number1 = 0.0;
	double number2 = 0.0;
    double number3 = 1;
	char operation;
    char op;
	printf("Enter the calculation:\n");
    scanf("%lf%c%lf",&number1,&operation,&number2);
    //1+2*3+4;
    //1+2+3;
    //1*2+3*4;
    //1*2*3;
    while(1) {
        scanf("%c",&op);
        if(op != '=') {
            scanf("%lf",&number3);
        }
        switch(operation) {
            case '+': 
                if(op == '*') {
                    number2 = number2 * number3;
                } else if(op == '/') {
                    number2 = number2 / number3;
                } else if(op == '%') {
                    number2 = (long)number2 % (long)number3;
                } else {
                    number1 = number1 + number2;
                    operation = op;
                    number2 = number3;
                } break;
            case '-':
                if(op == '*') {
                    number2 = number2 * number3;
                } else if(op == '/') {
                    number2 = number2 / number3;
                } else if(op == '%') {
                    number2 = (long)number2 % (long)number3;
                } else {
                    number1 = number1 - number2;
                    operation = op;
                    number2 = number3;
                } break;
            case '*' :
                number1 = number1 * number2;
                operation = op;
                number2 = number3;
                break;
            case '/':
                number1 = number1 / number2;
                operation = op;
                number2 = number3;
                break;
            case '%':
                number1 = (long)number1 % (long)number2;
                operation = op;
                number2 = number3;
                break;
        }
        if(op == '=') {
            break;
        }
    }
    printf("%lf",number1);
    system("PAUSE");
    return 0;
}
