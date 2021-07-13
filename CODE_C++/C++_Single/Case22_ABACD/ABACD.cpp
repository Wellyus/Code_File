#include<iostream>
using namespace std;
class A
{
    public:
        A(int n)
        {
            nv = n;
            cout << "Member of A" << endl;
        }
        void fun()
        {
            cout << "fun of A" << endl;
        }
    private:
        int nv;
};
class B1:virtual public A
{
    public:
        B1(int a):A(a)
        {
            cout << "Member of B1" << endl;
        }
    private:
        int nv1;
};
class B2:virtual public A
{
    public:
        B2(int a):A(a)
        {
            cout << "Member of B2" << endl;
        }
    private:
        int nv2;
};
class C:public B1,public B2
{
    public:
        C(int a):A(a),B1(a),B2(a)
        {
            cout << "Member of C" << endl;
        }
        void fund()
        {
            cout << "fun of C" << endl;
        }
    private:
        int nvd;
};
int main()
{
    C c1(1);
    c1.fund();
    c1.fun();
    getchar();
    getchar();
    return 0;
}