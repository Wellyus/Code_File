#include<iostream>
#include<vector>
using namespace std;
class A
{
    public:
    /*
        int coinchanges(vector<int>& coins,int amount)
        {
            vector<int> book(amount+1,amount+1);
            book[0] = 0;
            for(int i=0;i<book.size();i++)
            {
                for(int coin : coins)
                {
                    if(i - coin < 0)
                    {
                        continue;
                    }
                    book[i] = min(book[i],1 + book[i-coin]);
                }
            }
            return (book[amount]==amount+1)?-1:book[amount];
        }
    */
        int coinchanges(vector<int>& coins,int amount)
        {
            vector<int> book(amount+1,amount+1);
            book[0] = 0;
            for(int coin:coins)
            {
                book[amount] = min(book[amount],1+book[amount-coin]);
            }
            
        }
};
int main()
{
    A a;
    vector<int> coins = {1,2,4};
    cout << a.coinchanges(coins,9);
    return 0;
}