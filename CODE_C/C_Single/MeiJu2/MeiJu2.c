//MeiJu2.c
#include<stdio.h>
int main()
{
    char a[20][21];
    int i,j,sum,map=0,p,q,x,y,n,m;
    scanf("%d %d",&n,&m);
    for(i=0;i<n;i++)
    {
        scanf("%s",a[i]);
    }
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            if(a[i][j]=='.')
            {
                sum = 0;
                x = i;
                y = j;
                while(a[i][j]!='#')
                {
                    if(a[x][y]=='G')
                    {
                        sum++;
                       
                    }
                    x--;
                }
                x = i;
                y = j;
                while(a[i][j]!='#')
                {
                    if(a[x][y]=='G')
                    {
                        sum++;
                       
                    }
                    x++;
                }
                x = i;
                y = j;
                while(a[i][j]!='#')
                {
                    if(a[x][y]=='G')
                    {
                        sum++;
                        
                    }
                    y--;
                }
                x = i;
                y = j;
                while(a[i][j]!='#')
                {
                    if(a[x][y]=='G')
                    {
                        sum++;
                        
                    }
                    y++;
                }
                if(sum>map)
                {
                    map = sum;
                    p = i;
                    q = j;
                }
            }

        }
    }
    printf("��ը��������(%d,%d),����������%d������\n",p,q,map);
    getchar();
    getchar();
    return 0;
}