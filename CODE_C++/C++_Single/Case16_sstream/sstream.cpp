#include<iostream>
#include<sstream>
using namespace std;
int main()
{
    string s1,s2;
    ostringstream oss;
    istringstream iss;
    char c1 = '+',c2;
    double val,sum=0.0;
    cin >> s2;
    cout << s2;
    iss.str(s2);
    while(c1!=' ')
    {
        iss >> val >> c2;
        if(c1=='+')
        {
            sum+=val;
        }
        else if(c1=='-')
        {
            sum-=val;
        }
        c1 = c2;
        c2 = ' ';
    }
    oss << sum;
    s1 = oss.str();
    cout << s1 << endl;
    return 0;
}