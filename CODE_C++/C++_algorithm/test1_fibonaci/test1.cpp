#include<iostream>
using namespace std;
#include<vector>
class A
{
    public:
    /*
        int fib(int N)
        {
            if(N<0)
            {
                return 0;
            }
            vector<int> memo(N+1,0);
            return helper(memo,N);
        }
        int helper(vector<int>& memo,int n)
        {
            if(n==1||n==2)
            {
                return 1;
            }
            if(memo[n]!=0)
            {
                return memo[n];
            }
            memo[n] = helper(memo,n-1) + helper(memo,n-2);
            return memo[n];
        }
    */
        int fib(int N)
        {
            if(N==0)
            {
                return 0;
            }
           int prev = 1,curr = 1;
           for(int i = 3;i <= N;i ++)
           {
               int sum = prev + curr;
               prev = curr;
               curr = sum;
           }
            return curr;
        }
};
int main()
{
    A a;
    cout << a.fib(5);
    return 0;
}