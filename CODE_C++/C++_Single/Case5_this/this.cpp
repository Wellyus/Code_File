#include<iostream>
#include<string>
using namespace std;
class Point
{
    public:
        Point(int x,int y)
        {
            this->x=x;
            this->y=y;
        }
        void MovePoint(int a,int b)
        {
            x = x+a;
            y = y+b;
        }
        void print()
        {
            cout << "x = " << x << ",y = " << y << endl;
        }
        Point self()
        {
            return *this;
        }
    private:
        int x,y;
};
int main()
{
    Point pt1(10,10),pt2(15,15);
    pt1.print();
    pt1.MovePoint(2,2);
    pt1.print();
    pt2 = pt2.self();
    return 0;
}