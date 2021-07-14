# Git使用教程
## 本地仓库
- **初始化本地仓库**  
``git init``  
- **修改分支**  
``git branch -M main``  
- **将文件添加到缓冲区**  
``git add <FileName>``  
- **将文件提交到工作区**  
``git commit -m "提交信息"``
-----
## 远程仓库
- **关联远程仓库**  
``git remote add 仓库名 git@github.com:Wellyus/Code_File.git``  
- **第一次推送本地文件到远程仓库**  
``git push -u <Repository_Name> main``  
- **推送本地文件到远程仓库**  
``git push <Repository_Name> main``  
---
## 其他
- **查看远程库信息**  
``git remote -v``
- **取消本地与远程仓库的关联**  
``git remote remove <Repository_Name>``  
- **查看当前状态**  
``git status``  
---

