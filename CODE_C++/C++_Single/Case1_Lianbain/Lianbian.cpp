#include<iostream>
using namespace std;
class Point
{
    double x,y;
    public:
        Point(double x1=0,double y1 = 0) : x(x1),y(y1){}
        virtual double area()
        {
            return 0;
        }
};
class Circle:public Point
{
    double r;
    public:
        Circle(double x,double y,double r1) : Point(x,y),r(r1) {}
        double area()
        {
            return 3.14*r*r;
        }
};
int main()
{
    Point a(2.5,2.5);
    Circle c(2.5,2.5,1);
    cout << "Point area = " << a.area() << endl;
    cout << "Circle area = " << c.area() << endl;
    Point *pc = &c, &rc = c;
    cout << "Circle area = " << pc->area() << endl;
    cout << "Circle area = " << rc.area() << endl;
    pc = &a;
    cout << pc->area();
    return 0;
}