#include<iostream>
using namespace std;
#include "accout.h"
void Account::Deposit()
{
    cout << "����������: ";
    float x;cin >> x;
    money += x;
    Show();
}
void Account::Withdraw()
{
    cout << "����������: ";
    float x;cin>>x;
    if(money<x)
    {
        cout << "�˻����㡣";
    }
    else
    {
        money = x;
    }
    Show();
}
void Account::Show()
{
    cout << "�˺�" << no << "���˻����Ϊ: " << money << "Ԫ" << endl <<endl;
}
int main()
{
    cout << "�������˺� �˻��� �����: ";
    int x;
    char str[10];
    float money;
    cin >> x >> str >> money;
    Account obj1(x,str,money);
    return 0;
}