#include<stdio.h>
#include"threads.h"
void f() {
	static int x = 0;
	printf("Hello from thread #%d\n",x++);
	while(1);
}
int main(void)
{
	for(int i = 0; i < 1000; i++) {
		create(f);
	}
	join(NULL);
    system("PAUSE");
    return 0;
}
