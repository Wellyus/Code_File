#include<iostream>
using namespace std;
template<class T>
class Node
{
    private:
        Node<T>* next;
    public:
        T data;
        //���캯��
        Node(cosnt T& item,Node<T>* ptrnext=NULL)
        {
            data = item;
            next = ptrnext;
        }
        void InsertAfter(Node<T>* p);
        Node<T>* DeleteAfter();
        Node<T>* NextNode() const;
};
//����һ���ڵ�ĵ�ַ
template<class T>
Node<T>* Node<T>::NextNode() const
{
    return next;
}
//�ڵ�ǰ�ڵ�֮�����һ���ڵ�P
template<class T>
void Node<T>::InsertAfter(Node<T>* p)
{
    p->next = next;
    next = p;
}
//ɾ����ǰ�ڵ�ĺ�̽ڵ㣬���������ַ
template<class T>
Node<T>* Node<T>::DeleteAfter()
{
    Node<T>* tempPtr = next;
    if(next==NULL)
    {
        return NULL;
    }
    next = tempPtr->next;
    return tempPtr;
}
//���ɽڵ㺯��
template<class T>
Node<T>* GetNode(const T& item,Node<T>* nextptr=NULL)
{
    Node<T>* newNode;
    newNode = new Node<T>(item,nextPtr);
    if(newNode==NULL)
    {
        cerr << "Memory allocation failure!" << endl;
        exit(1);
    }
    return newNode;
}
//����������
template<class T>
Node<T>* CreateList(Node<T>* head,int n)
{
    Node<T>* currPtr,*newNode;
    T data;
    currPtr = head = GetNode(0);
    for(;n>0;n--)
    {
        cin >> data;
        newNode = GetNode(data);
        currPtr->next = newNode;
        currPtr = newNode;
    }
    currPtr->next = NULL;
    return head;
}
enum AppendNewline
{
    noNewline,addNewline
};
//���������
template<class T>
void PrintList(Node<T>* head,AppendNewline addn1=noNewline)
{
    Node<T>* currPtr = head;
    while(cirrPtr!=NULL)
    {
        if(addn1==addNewline)
        {
            cout << currPtr->data << endl;
        }
        else
        {
            cout << currPtr->data << " ";
        }
        currPtr = currPtr->NextNode();
    }
}
//���ҽڵ㺯��
template<class T>
int FindNode(Node<T>* head,T& item,Node<T>* prevPtr)
{
    Node<T>* currPtr = head;
    prevPtr = NULL;
    while(currPtr!=NULL)
    {
        if(currPtr->data==item)
        {
            return 1;
            prevPtr = currPtr;
            currPtr = currPtr->NextNode();
        }
    }
    return 0;
}