#include<iostream>
using namespace std;
#include <queue>
int main()
{
    queue<int> q;
    int n;
    cin >> n;
    for(int i=0;i<n;i++)
    {
        q.push(i+1);
    }
    while(q.size()>2)
    {
        cout << q.front() << " ";
        q.pop();
        q.push(q.front());
        q.pop();
    }
    cout << endl;
    while(!q.empty())
    {
        cout << q.front() << " ";
        q.pop();
    }
    return 0;
}