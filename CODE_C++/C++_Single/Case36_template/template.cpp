#include<iostream>
using namespace std;
template <class T> T add(T a,T b)
{
    return a+b;
}
int main()
{
    cout << "int_add=" << add(100,200) << endl;
    cout << "double_add=" << add(1.2,2.3) << endl;
    cout << "char_add=" << add('A','\2') << endl;
    getchar();
    getchar();
    return 0;
}