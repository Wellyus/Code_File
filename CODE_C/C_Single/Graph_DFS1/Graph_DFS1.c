//Graph_DFS1.c
#include<stdio.h>
int book[101],sum,n,e[101][101];
void dfs(int cur)
{
    int i;
    printf("%d ",cur);
    sum++;
    if(sum ==n)
    {
        return ;
    }
    for(i = 1;i<=n;i++)
    {
        if(e[cur][i]==1&&book[i] == 0)
        {
            book[i] = 1;
            dfs(i);
        }
    }
    return ;
}
int main()
{
    int i,j,m,a,b;
    scanf("%d %d",&n,&m);
    for(i=1;i<=n;i++)
    {
        for(j = 1;j<=n;j++)
        {
            if(i == j)
            {
                e[i][j] = 1;
            }
            else
            {
                e[i][j] = 99999999;
            }
        }
    }
    for(j=1;j<=m;j++)
    {
        scanf("%d %d",&a,&b);
        e[a][b] = 1;
        e[b][a] = 1;
    }
    book[1] = 1;
    dfs(1);
    getchar();
    getchar();
    return 0;
}