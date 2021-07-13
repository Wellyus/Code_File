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
class Derived:public Base
{
    public:
        void print()
        {
            cout << "Derived" << endl;
        }
};
void display(Base *p)
{
    p->print();
}
int main()
{
    Derived d;
    Base b;
    display(&d);
    display(&b);
    return 0;
}