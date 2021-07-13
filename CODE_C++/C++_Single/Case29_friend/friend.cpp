#include<iostream>
#include<cmath>
using namespace std;
class Point
{
    public:
        Point(int _x=0,int _y=0) : x(_x),y(_y){}
    private:
        int x,y;
        friend double distance(Point &r1,Point &r2);
};
double distance(Point&r1,Point &r2)
{
    return sqrt((r2.x-r1.x)*(r2.x-r1.x)+(r2.y-r1.y)*(r2.y-r1.y));
}
int main(void)
{
    Point a(1,1),b(5,5);
    cout << distance(a,b);
    return 0;
}