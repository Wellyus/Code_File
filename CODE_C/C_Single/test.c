#include <stdio.h>
int main (void)
{
    int day,month,year;
    printf("Please enter the date in form of the month,the day the year\n");
    printf("For example,in the form on 12 31 2003.I will print 31st December 2003\n" );
    scanf("%d-%d-%d",&month,&day,&year);
	if(day==1||day==21||day==31) {
        printf("%dst",day);
    } else if(day==2||day==22) {
        printf("%dnd",day);
    } else if(day==3||day==23) {
        printf("%drd",day);
    } else {
        printf("%dth",day);
    }
	switch (month) {
		case 12: printf(" December"); break;
		case 11: printf(" November"); break;
        case 10: printf(" October"); break;
		case  9: printf(" September"); break;
		case  8: printf(" August"); break;
		case  7: printf(" July"); break;
		case  6: printf(" June"); break;
		case  5: printf(" May"); break;
		case  4: printf(" April"); break;
		case  3: printf(" March"); break;
		case  2: printf(" February"); break;
		case  1: printf(" January"); break;
	}
    printf(" %d",year);
	return 0;
}
