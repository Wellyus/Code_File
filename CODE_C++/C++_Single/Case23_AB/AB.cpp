#include<iostream>
using namespace std;
class A
{
    public:
        int a;
        void fun()
        {
            cout << "a.fun()" << endl;
        }
};
class B
{
    public:
        void fun()
        {
            cout << "b.fun()" << endl;
        }
        void gun()
        {
            cout << "b.gun()" << endl;
        }
};
class C:public A,public B
{
    public:
        int a;
        void gun()
        {
            cout << "c.gun" << endl;
        }
        void hun()
        {
            A::fun();
        }
};
int main()
{
    C c,*p = &c;
    c.A::fun();
    c.B::fun();
    p->A::fun();
    p->B::fun();
    c.hun();
    c.a = 1;
    c.A::a = 2;
    cout << c.a << endl << c.A::a << endl;
    return 0;
}