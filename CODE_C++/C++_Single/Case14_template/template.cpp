#include<iostream>
using namespace std;
template <class T>
class Compare
{
    public:
        Compare(T a,T b)
        {
            x = a;
            y = b;
        }
        T max()
        {
            return (x>y)?x:y;
        }
        T min();
    private:
        T x,y;
};
template <class T>
T Compare<T>:: min()
{
    return (x<y)?x:y;
}
int main()
{
    Compare <int> a(4,7);
    cout << "a:max = " << a.max() << ",min = " << a.min() << endl;
    return 0;
}