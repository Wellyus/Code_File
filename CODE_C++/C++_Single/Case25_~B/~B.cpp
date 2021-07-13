#include<iostream>
using namespace std;
class Undergraduate
{
    protected:
        int num;
        string name;
        char sex;
    public:
        Undergraduate(int n,string nam,char s)
        {
            num = n;
            name = nam;
            sex = s;
        }
        ~Undergraduate(){}
};
class graduate_stu : public Undergraduate
{
    private:
        int age;
        string addr;
    public:
        graduate_stu(int n,string nam,char s,int a,string ad):Undergraduate(n,nam,s)
        {
            age = a;
            addr = ad;
        }
        void show()
        {
            cout << "num: " << num << ",name: " << name << ",sex: " << sex << ",age: " << age << ",address: " << addr << endl;
        }
        ~graduate_stu(){}
};
int main()
{
    graduate_stu stud1(10010,"Wang-li",'f',19,"115 Beijing Road,Shanghai");
    graduate_stu stud2(10011,"Zhang-fun",'m',21,"213 Shanghai Road,Beijing");
    stud1.show();
    stud2.show();
    getchar();
    getchar();
    return 0;
}