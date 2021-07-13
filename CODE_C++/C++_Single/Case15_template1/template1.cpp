#include<iostream>
using namespace std;
template <class T>
class Array
{
    public:
        Array(int c)
        {
            arr = new T[c];
        }
        T& operator[](int i)
        {
            return arr[i];
        }
    private:
        T *arr;
};
int main()
{
    int i;
    Array<int> array(5);
    for(i=0;i<5;i++)
    {
        cin >> array[i];
    }
    for(i=0;i<5;i++)
    {
        cout << "array[" << i << "]: " << array[i] << "  ";
    }
    return 0;
}