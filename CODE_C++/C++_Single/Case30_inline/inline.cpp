#include<iostream>
using namespace std;
inline int Max(int x,int y)
{
    return x>y?x:y;
}
int main()
{
    cout << "Max(20,10): " << Max(20,10) << endl;
    cout << "Max(0,2000): " << Max(0,2000) << endl;
    cout << "Max(100,1010) :" << Max(100,1010) << endl;
    getchar();
    return 0; 
}
