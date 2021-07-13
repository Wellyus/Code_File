#include<iostream>
using namespace std;
class Base
{
    public:
        virtual void print()
        {
            cout << "Base" << endl;
        }
};
class Derived: public Base
{
    public:
        void print()
        {
            cout << "Derived" << endl;
        }
};
void display(Base *p,void (Base::*pd)())
{
    p->(pd());
}
int main(void)
{
    Derived d;
    Base b;
    display(&d,Base::print);
    display(&b,Base::print);
    return 0;
}