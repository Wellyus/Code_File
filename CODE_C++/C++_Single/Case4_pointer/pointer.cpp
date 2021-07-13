#include<iostream>
using namespace std;
class Data
{
    public:
        int top;
        typedef unsigned int index;
        char get() const;
        char get(int st,int eb) const;
        string content;
};
char Data::get(int st,int eb) const
{
    return 'a';   
}
int main()
{
    Data d,*p = &d;
    d.top = 520;
    int Data::*pt = &Data::top;
    int k = d.top;
    k = d.*pt;
    k = p->top;
    char (Data::*pmf)(int ,int)const;
    pmf = &Data::get;
    char c1 = d.get(0,0);
    char c2 = (d.*pmf)(0,0);
    char c3 = (p->*pmf)(0,0);
    cout << k << c1 << c2 << c3;
    return 0;
}