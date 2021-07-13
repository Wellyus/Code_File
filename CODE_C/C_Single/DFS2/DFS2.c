//DFS.c
#include<stdio.h>
#define N 4
int data[N];
int book[N];
void dfs(int n)
{
    int i;
    if(n == N)
    {
        printf("%d%d%d\n",data[1],data[2],data[3]);
        return ;
    }
    for(i=1;i<N;i++)
    {

        if(book[i]==0)
        {
            data[n] = i;//n为待插元素的下标
            book[i] = 1;
            dfs(n+1);
            book[i] = 0;
        }
    }
    return ;
}
int main()
{
    dfs(1);
    getchar();
    getchar();
    return 0;
}