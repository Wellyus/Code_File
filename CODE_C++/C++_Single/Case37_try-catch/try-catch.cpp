#include<iostream>
using namespace std;
void fun(int test)
{
    if(test==0)
    {
        throw 0;
    }
    if(test==1)
    {
        throw 1.5;
    }
    if(test==2)
    {
        throw "abc";
    }
    cout << "fun正常调用结束！";
}
void caller1(int test)
{
    try
    {
        fun(test);
    }
    catch(int )
    {
        cout << "caller1捕获int->";
    }
    cout << "caller1调用正常结束" << endl;
}
void caller2(int test)
{
    try
    {
        caller1(test);
    }
    catch(double)
    {
        cout << "caller2捕获double->";
    }
    catch(...)
    {
        cout << "caller2捕获所有未知异常->";
    }
    cout << "caller2调用正常结束" << endl;
}
int main()
{
    for(int i=3;i>=0;i--)
    {
        caller2(i);
    }
    return 0;
}