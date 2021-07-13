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
        complex operator + (complex &c2);
        complex operator - (complex &c2);
        void display()
        {
            cout << real << "+" << imag << "i" << endl;
        }
    private:
        double real;
        double imag;
};
complex complex :: operator + (complex &c2)
{
    complex c;
    c.real = c2.real + real;
    c.imag = c2.imag + imag;
    return c;
}
complex complex::operator -  (complex &c2)
{
    complex c;
    c.real = real - c2.real;
    c.imag = imag - c2.imag;
    return c;
}
int main()
{
    complex c1(1,2),c2(3,4),c3;
    c3 = c2+c1;
    c3.display();
    c3 = c2-c1;
    c3.display();
    return 0;
}