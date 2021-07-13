#include<iostream>
#include<vector>
using namespace std;
int main()
{
    vector<int> V1,V2;
    int A[] = {1949,10,1};
    long long unsigned i;
    vector<int>::iterator It;
    V1.assign(A,A+3);
    V2.assign(3,10);
    for(i=1;i<=5;i++)
    {
        V1.push_back(i);
    }
    V1.pop_back();
    V1.front() -= V1.back();
    for(It = V1.begin();It < V1.end();It++)
    {
        V2.push_back(*It);
    }
    V2.insert(V2.begin(),2,300);
    V2.erase(V2.begin()+5);
    for(i=0;i<V2.size();i++)
    {
        cout << V2[i] << " ";
    }
    return 0;
}