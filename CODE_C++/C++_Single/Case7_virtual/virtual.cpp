#include<iostream>
using namespace std;
class Sharp
{
    public:
        virtual double area() = 0;
        virtual double volumn() = 0;
};
class Circle : public Sharp
{
    public:
        Circle(double a):r(a){}
        virtual double area()
        {
            return 3.14*r*r;
        }
        virtual double volumn()
        {
            return 0;
        }
    private:
        double r;
};
class Cylinder : public Circle
{
    public:
        Cylinder(double a,double b):Circle(a),h(b){}
        virtual double volumn()
        {
            return area()*h;
        }
    private:
        double h;
};
int main()
{
    Circle a(10.0);
    Cylinder b(5.6,10.5);
    cout << a.area() << "," << b.volumn() << endl;
    Sharp *pb;
    pb = &b;
    cout << pb->area() << "," << pb->volumn() << endl;
    return 0;
}