#include<stdio.h>
#include<math.h>
float ix = (1.10+1.11)/2;
float iy = 0.29;
int main()
{
    float i,j;
    int k=1;
    while(k==1)
    {
        printf("������Ƕ�ֵ: ");
        scanf("%f",&i);
        j = sqrt(ix*iy/(ix+iy-i));
        printf("EֵΪ��%.2f\n",j);
        scanf("%d",&k);
    }
    return 0;
}