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
        friend complex operator ++(complex &c1);
        friend complex operator ++(complex &c1,int);
        void display()
        {
            cout << real << "+" << imag << "i" << endl;
        }
    private:
        double real;
        double imag;
};
complex operator ++(complex &c1)
{
    complex c;
    c1.real++;
    c1.imag++;
    c.real = c1.real;
    c.imag = c1.imag;
    return c;
}
complex operator ++(complex &c1,int)
{
    complex c;
    c.real = c1.real;
    c.imag = c1.imag;
    c1.real++;
    c1.imag++;
    return c;
}
int main()
{
    complex c1(1,2),c2,c3;
    c2 = ++ c1;
    c1.display();
    c2.display();
    c3 = c1++;
    c1.display();
    c2.display();
    return 0;
}