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
        complex operator ++ (int);
        void display()
        {
            cout << real << "+" << imag << "i" << endl;
        }
    private:
        double real;
        double imag;
};
complex complex::operator ++(int)
{
    complex a;
    a.real = real;
    a.imag = imag;
    real++;
    imag++;
    return a;
}
int main()
{
    complex c1(1,2),c2;
    c2 = c1++;
    c1.display();
    c2.display();
    return 0;
}