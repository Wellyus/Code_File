#include<iostream>
#include<stdlib.h>
using namespace std;
class Fraction
{
    public:
        Fraction(int n=0,int d=1):nume(n),deno(d)
        {
            simplify();
        }
        Fraction(double d);
        Fraction(const string &str);
        Fraction(const Fraction& f):nume(f.nume),deno(f.deno){}
        Fraction& operator+=(const Fraction& b);
        Fraction& operator-=(const Fraction& b);
        friend ostream& operator << (ostream& os,const Fraction& a);
        friend istream& operator >> (istream& is,Fraction & a);
        operator int();
        operator double();
        void display();
    private:
        void simplify();
        int nume,deno;
};
Fraction& Fraction:: operator +=(const Fraction& b)
{
    nume = nume * b.deno + deno*b.nume;
    deno = deno*b.deno;
    simplify();
    return *this;
}
Fraction& Fraction:: operator-=(const Fraction & b)
{
    nume = nume *b.deno-deno-b.nume;
    deno = deno * b.deno;
    simplify();
    return *this;
}
ostream& operator << (ostream& os,const Fraction& a)
{
    if(a.deno!=0&&a.deno!=1&&a.nume!=a.deno)
    {
        os << a.nume << "/" << a.deno;
    }
    else
    {
        os << a.nume;
    }
    return os;
}
istream& operator >> (istream& is,Fraction & a)
{
    char ch;
    is >> a.nume >> ch >> a.deno;
    return is;
}
Fraction :: operator double()
{
    return (double)nume/deno;
}
Fraction::operator int()
{
    return (int)(nume/deno);
}
Fraction :: Fraction(const string &str):nume(0),deno(1)
{
    char buf[200];
    int i=str.find('/'),j=str.length()-i-1;
    if(i>0)
    {
        str.copy(buf,i,0);
        buf[i]=0;
        nume=atoi(buf);
        str.copy(buf,j,i+1);
        buf[j]=0;
        deno=atoi(buf);
    }
    simplify();
}
Fraction :: Fraction(double d):nume(0),deno(1)
{
    d=d-nume;
    while(int(d*10)!=0)
    {
        nume=nume*10+int(d*10);
        deno=deno*10;
        d=d*10-int(d*10);
    }
    simplify();
}
void Fraction::display()
{
    if(deno!=0&&deno!=1&&nume!=deno)
    {
        cout << nume << "/" << deno << endl;
    }
    else
    {
        cout << nume << endl;
    }
}
void Fraction::simplify()
{
    int m,n,r,s=1;
    if(nume!=0&&deno!=0)
    {
        if(deno<0)
        {
            s=-s;
            deno = -deno;
        }
        if(nume<0)
        {
            s=-s;
            nume = -nume;
        }
        m=nume;
        n=deno;
        while(n!=0)
        {
            r=m%n;
            m=n;
            n=r;
        }
        if(m!=0)
        {
            nume = s*nume/m;
            deno = deno/m;
        }
    }
    else
    {
        nume = 0;
        deno = 1;
    }
}
int main()
{
    Fraction a(1,2),b(0.25),c("6/9");
    cout << (double)a << endl;
    cout << (int)a << endl;
    a.display();
    b.display();
    c.display();
    a+=b;
    a.display();
    a-=c;
    a.display();
    Fraction e,f;
    cin >> e >> f;
    e+=f;
    cout << "e+f=" << e << endl;
    return 0;
}