//��ֵ���ݹ���
#include<iostream>
using namespace std;
class man
{
    protected:
        int age;
        string name;
    public:
        man(int a,string n):age(a),name(n){}
        void print()
        {
            cout <<   "����: " << name << ",����: " << age << endl;
        }
        int get_age()
        {
            return age;
        }
        string get_name()
        {
            return name;
        }
};
class superman:public man
{
    private:
        int force_value;
    public:
        superman(int a,string n,int f):man(a,n),force_value(f){}
        void print()
        {
            cout << "����: " << name << ",����: " << age << "����ֵ: " << force_value << endl;
        }
        void fly()
        {
            cout << "fly,fly,fly......" << endl;
        }
};
int work(man &a)
{
    if(a.get_age()>=20)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
int main()
{
    int n;
    man i(25,"jerry");
    superman j(20,"clark",100);
    n = work(j);
    if(n)
    {
        cout << "����ʤ�δ����." << endl;
    }
    else
    {
        cout << "������ʤ�δ����." << endl;
    }
    getchar();
    getchar();
    return 0;
}