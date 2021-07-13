#include<iostream>
#include<string.h>
using namespace std;
class A
{
    public:
        int getArea() const
        {
            return w*h;
        }
        void setWH(int x,int y)
        {
            w = x;
            h = y;
        }
        A(int x,int y)
        {
            w = x;
            h = y;
        }
        A(){}
        private:
            int w,h;
};
int main()
{
    A a;
    a.setWH(3,9);
    A const b(3,6);
    b.getArea();
    cout << a.getArea() << endl << b.getArea() << endl;
    getchar();
    getchar();
    return 0;
}