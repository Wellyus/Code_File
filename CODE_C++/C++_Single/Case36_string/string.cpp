#include<iostream>
#include<string>
using namespace std;
int main(void)
{
    string str1 = "ABCDEFGHIJK";
    int n = str1.size();
    cout << n;
    int b = str1.empty();
    cout << b;
    string SY[5] = {"Jiang","Cao","Zou","Liu","Wei"};
    for(int i=0;i<5;i++)
    {
        cout << SY[i] << " ";
    }
    return 0;
}