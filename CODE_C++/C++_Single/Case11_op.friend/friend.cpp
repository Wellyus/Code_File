#include<iostream>
using namespace std;
class complex
{
    public:
        complex(double r=0.0,double i=0.0)
        {
            real = r;
            imag = i;
        }
        friend complex operator +(const complex &c1,const complex &c2);
        friend complex operator -(const complex &c1,const complex &c2);
        void display()
        {
            cout << real << "+" << imag << "i" << endl;
        }
    private:
        double real;
        double imag;
};
complex operator +(const complex &c1,const complex &c2)
{
    complex c3;
    c3.real = c1.real + c2.real;
    c3.imag = c1.imag + c2.imag;
    return c3;
}
complex operator -(const complex &c1,const complex &c2)
{
    complex c3;
    c3.real = c1.real-c2.real;
    c3.imag = c1.imag-c2.imag;
    return c3;
}
int main()
{
    complex c1(1,2),c2(3,4),c3;
    c3 = c1+c2;
    c3.display();
    c3 = c2-c1;
    c3.display();
    return 0;
}