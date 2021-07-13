//catfish.c
#include<stdio.h>
struct queue
{
    int data[1000];
    int head;
    int tail;
};
struct stack
{
    int data[10];
    int top;
};
int main()
{
    struct queue q1,q2;
    struct stack s;
    int book[10];
    int i,t;
    q1.head = 0;q1.tail = 0;
    q2.head = 0;q2.tail = 0;
    s.top = -1;
    for(i=0;i<10;i++)
    {
        book[i] = 0;
    }
    for(i=0;i<=5;i++)//小哼手牌

    {
        scanf("%d",&q1.data[q1.tail]);
        q1.tail++;
    }
    for(i=0;i<=5;i++)//小哈手牌
    {
        scanf("%d",&q2.data[q2.tail]);
        q2.tail++;
    }
    //赋值手牌结束
    while(q1.head<q1.tail&&q2.head<q2.tail)
    {
        t = q1.data[q1.head];//小哼打一张牌
        q1.head++;
        if(book[t]==0)
        {
            s.top++;
            s.data[s.top] = t;
            book[t]++;
        }
        else
        {
            q1.data[q1.tail] = t;
            q1.tail++;
            while(s.data[s.top]!=t)
            {
                q1.data[q1.tail] = s.data[s.top];
                q1.tail++;
                book[s.data[s.top]] = 0;
                s.top--;
            }
            q1.data[q1.tail] = s.data[s.top];
            q1.tail++;
            book[s.data[s.top]] = 0;
            s.top--;
        }
        //小哈出一张牌
        t = q2.data[q2.head];
        q2.head++;
        if(book[t]==0)
        {
            s.top++;
            s.data[s.top] = t;
            book[t]++;
        }
        else
        {
            q2.data[q2.tail] = t;
            q2.tail++;
            while(s.data[s.top]!=t)
            {
                book[s.data[s.top]] = 0;
                q2.data[q2.tail] = s.data[s.top];
                q2.tail++;
                s.top--;
            }
            q2.data[q2.tail] = s.data[s.top];
            q2.tail++;
            book[s.data[s.top]] = 0;
            s.top--;
        }
    }
    //判断结果
    if(q2.head==q2.tail)
    {
        printf("小哼win!\n");
        printf("小哼的手牌是\n");
        for(i=q1.head;i<q1.tail;i++)
        {
            printf("%d ",q1.data[i]);
        }
        if(s.top)
        {
            printf("\n桌上的牌是\n");
            for(i=s.top;i>=0;i--)
            {
                printf("%d ",s.data[s.top]);
            }
        }
        else
        {
            printf("桌上已经没有牌了！\n");
        }
        
    }
    else
    {
        printf("小哈win!\n");
        printf("小哈的手牌是\n");
        for(i=q2.head;i<q2.tail;i++)
        {
            printf("%d ",q2.data[i]);
        }
        if(s.top)
        {
            printf("桌上的牌是\n");
            for(i=s.top;i>=0;i--)
            {
                printf("%d ",s.data[i]);
            }
            /*
            while(s.top>=0)
            {
                printf("%d ",s.data[s.top]);
                s.top--;
            }
            */
        }
        else
        {
            printf("桌上已经没有牌了！\n");
        }
    }
    getchar();
    getchar();
    return 0;

}