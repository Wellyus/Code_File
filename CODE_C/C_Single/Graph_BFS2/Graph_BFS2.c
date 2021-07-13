//Graph_BFS2.c
#include<stdio.h>
struct node
{
    int x;
    int s;
};
int main()
{
    struct node que[2501];
    int e[51][51] = {0},book[51] = {0};
    int head,tail;
    int i,j,n,m,a,b,cur,start,end,flag=0;
    scanf("%d %d %d %d",&n,&m,&start,&end);
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n;j++)
        {
            if(i == j)
            {
                e[i][j] = 0;
            }
            else
            {
                e[i][j] = 99999999;
            }
        }
    }
    for(i=1;i<=m;i++)
    {
        scanf("%d %d",&a,&b);
        e[a][b] = 1;
    }
    head = 1;
    tail = 1;
    book[start] = 1;
    que[tail].x = start;
    que[tail].s = 0;
    tail++;
    while(head<tail)
    {
        cur = que[head].x;
        for(i=1;i<=n;i++)
        {
            if(e[cur][i]!=99999999&&book[i]==0)
            {
                book[i] = 1;
                que[tail].x = i;
                que[tail].s = que[head].s + 1;
                tail++;
            }
            if(que[tail-1].x==end)
            {
                flag = 1;
                break;
            }
        }
        if(flag == 1)
        {
            break;
        }
        head++;
    }
    printf("%d",que[tail-1].s);
    getchar();
    getchar();
    return 0;
}