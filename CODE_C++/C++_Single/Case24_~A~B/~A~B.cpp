#include<iostream>
using namespace std;
class Base1
{
    private:
        int b1;
    public:
        Base1()
        {
            b1 = 0;
            cout << "Ĭ�Ϲ���Base1: " << "b1 = " << b1 << endl;
        }
        Base1(int i)
        {
            b1 = i;
            cout << "����Base1: " << "b1 = " << b1 << endl;
        }
};
class Base2
{
    private:
        int b2;
    public:
        Base2()
        {
            b2 = 0;
            cout << "Ĭ�Ϲ���Base2: " << "b2 = " << b2 << endl;
        }
        Base2(int j)
        {
            b2 = j;
            cout << "����Base2: " << "b2 = " << b2 << endl;
        }
};
class Base3
{
    public:
        Base3()
        {
            cout << "Ĭ�Ϲ���Base3: " << endl;
        }
};
class Derive : public Base1,public Base2,public Base3
{
    private:
        Base1 memberBase1;
        Base2 memberBase2;
        Base3 memberBase3;
    public:
        Derive()
        {
            cout << "Ĭ�Ϲ���Derive." << endl;
        }
        Derive(int a,int b,int c,int d):Base1(a),Base2(b),memberBase1(c),memberBase2(d)
        {
            cout << "����Derive." << endl;
        }
};
int main()
{
    cout << "\n�������������obj1: " << endl;
    Derive obj1;
    cout << "\n�������������obj2: " << endl;
    Derive obj2(1,2,3,4);
    return 0;
}