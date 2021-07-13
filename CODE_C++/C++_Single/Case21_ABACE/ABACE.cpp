#include<iostream>
using namespace std;
enum Color
{
    Red,Yellow,Green,White
};
class Circle
{
    private:
        float radius;
    public:
        Circle(float r)
        {
            radius = r;
            cout << "Circle initialized!" << endl;
        }
        ~Circle()
        {
            cout << "Circle destroyed!" << endl;
        }
        float Area()
        {
            return 3.1415926*radius*radius;
        }
};
class Table
{
    float height;
    public:
        Table(float h)
        {
            height = h;
            cout << "Table initialized!" << endl;
        }
        ~Table()
        {
            cout << "Table destroyed!" << endl;
        }
        float Height()
        {
            return height;
        }
};
class RoundTable:public Table,public Circle
{
    private:
        Color color;
    public:
        RoundTable(float h,float r,Color c);
        int GetColor()
        {
            return color;
        }
        ~RoundTable()
        {
            cout << "RoundTable destroyed!" << endl;
        }
};
RoundTable::RoundTable(float h,float r,Color c):Table(h),Circle(r)
{
    color = c;
    cout << "RoundTable initialized!" << endl;
}
int main()
{
    RoundTable cir_table(15.0,2.0,Yellow);
    cout << "The table properties are:" << endl;
    cout << "Height = " << cir_table.Height() << endl;
    cout << "Area = " << cir_table.GetColor() << endl;
    getchar();
    getchar();
    return 0;
}
