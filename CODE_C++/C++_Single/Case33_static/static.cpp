#include<iostream>
using namespace std;
class CTest
{
    public:
        CTest()
        {
            s_total++;
            id = s_total;
            cout << "构造" << id << " ";
        }
        ~CTest()
        {
            s_total--;
            cout << "析构" << id << " ";
        }
        static int gettotal()
        {
            return s_total;
        }
    private:
        static int s_total;
        int id;
};
int CTest::s_total = 0;
int main()
{
    CTest a,b,c;
    CTest *p = new CTest;
    cout << "合计= " << CTest::gettotal() << " ";
    delete p;
    cout << "合计= " << CTest::gettotal() << " ";
    getchar();
    getchar();
    return 0;
}
