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
    cout << "fun�������ý�����";
}
void caller1(int test)
{
    try
    {
        fun(test);
    }
    catch(int )
    {
        cout << "caller1����int->";
    }
    cout << "caller1������������" << endl;
}
void caller2(int test)
{
    try
    {
        caller1(test);
    }
    catch(double)
    {
        cout << "caller2����double->";
    }
    catch(...)
    {
        cout << "caller2��������δ֪�쳣->";
    }
    cout << "caller2������������" << endl;
}
int main()
{
    for(int i=3;i>=0;i--)
    {
        caller2(i);
    }
    return 0;
}