#include<iostream>
using namespace std;
#include "accout.h"
void Account::Deposit()
{
    cout << "请输入存款金额: ";
    float x;cin >> x;
    money += x;
    Show();
}
void Account::Withdraw()
{
    cout << "请输入存款金额: ";
    float x;cin>>x;
    if(money<x)
    {
        cout << "账户余额不足。";
    }
    else
    {
        money = x;
    }
    Show();
}
void Account::Show()
{
    cout << "账号" << no << "的账户余额为: " << money << "元" << endl <<endl;
}
int main()
{
    cout << "请输入账号 账户名 存款金额: ";
    int x;
    char str[10];
    float money;
    cin >> x >> str >> money;
    Account obj1(x,str,money);
    return 0;
}