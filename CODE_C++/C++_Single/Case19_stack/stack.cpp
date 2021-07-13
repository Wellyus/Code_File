#include<iostream>
#include<string>
using namespace std;
#include<stack>
bool Match(string str);
int main()
{
    bool n;
    string str;
    cin >> str;
    n = Match(str);
    if(n==true)
    {
        cout << "string is balanced!" << endl;
    }
    else
    {
        cout << "string is unbalanced!" << endl;
    }
    getchar();
    getchar();
    return 0;
}
bool Match(string str)
{
    stack<char> s;
    int len = str.length();
    for(int i=0;i<len;i++)
    {
        if(str[i]=='<'||str[i]=='('||str[i]=='['||str[i]=='{')
        {
            s.push(str[i]);
        }
        if(str[i]=='>'||str[i]==')'||str[i]==']'||str[i]=='}')
        {
            if(s.empty())
            {
                return false;
            }
            switch(str[i])
            {
                case '>':
                {
                    if(s.top()!='<')
                    {
                        return false;
                    }
                    s.pop();
                    break;
                }
                case ')':
                {
                    if(s.top()!='(')
                    {
                        return false;
                    }
                    s.pop();
                    break;
                }
                case ']':
                {
                    if(s.top()!='[')
                    {
                        return false;
                    }
                    s.pop();
                    break;
                }
                case '}':
                {
                    if(s.top()!='{')
                    {
                        return false;
                    }
                    s.pop();
                    break;
                }
            }
        }
    }
    if(s.empty())
    {
        return true;
    }
    else
    {
        return false;
    }
}