class Account
{
private:
    int no;
    char name[10];
    float money;
public:
    void Deposit();
    void Withdraw();
    void Show();
    Account(int iniNo,char *iniName,float iniMoney);
};