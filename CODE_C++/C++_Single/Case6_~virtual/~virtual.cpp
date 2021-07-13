#include<iostream>
using namespace std;
class Base
{
    public:
        Base(){}
        virtual ~Base()
        {
            cout << "the destructor of Base!";
        }
        virtual void fun()
        {
            cout << "in class Base!" << endl;
        }
};
class Derived : public Base
{
    public:
        Derived(){}
        ~Derived()
        {
            cout << "the destructor of class Derived!" << endl;
        }
        void fun()
        {
            cout << "in class Derived!" << endl;
        }
};
int main()
{
    Base *pTest = new Derived;
    pTest->fun();
    delete pTest;
    return 0;
}