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
    for(i=0;i<=5;i++)//С������

    {
        scanf("%d",&q1.data[q1.tail]);
        q1.tail++;
    }
    for(i=0;i<=5;i++)//С������
    {
        scanf("%d",&q2.data[q2.tail]);
        q2.tail++;
    }
    //��ֵ���ƽ���
    while(q1.head<q1.tail&&q2.head<q2.tail)
    {
        t = q1.data[q1.head];//С�ߴ�һ����
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
        //С����һ����
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
    //�жϽ��
    if(q2.head==q2.tail)
    {
        printf("С��win!\n");
        printf("С�ߵ�������\n");
        for(i=q1.head;i<q1.tail;i++)
        {
            printf("%d ",q1.data[i]);
        }
        if(s.top)
        {
            printf("\n���ϵ�����\n");
            for(i=s.top;i>=0;i--)
            {
                printf("%d ",s.data[s.top]);
            }
        }
        else
        {
            printf("�����Ѿ�û�����ˣ�\n");
        }
        
    }
    else
    {
        printf("С��win!\n");
        printf("С����������\n");
        for(i=q2.head;i<q2.tail;i++)
        {
            printf("%d ",q2.data[i]);
        }
        if(s.top)
        {
            printf("���ϵ�����\n");
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
            printf("�����Ѿ�û�����ˣ�\n");
        }
    }
    getchar();
    getchar();
    return 0;

}