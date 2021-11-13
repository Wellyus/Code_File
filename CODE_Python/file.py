file = open("d:/CODE_FILE/CODE_Python/a.txt", "w")
file.write("python\n")
a = []
for i in range(10):
    s = str(i) + "\n"
    a.append(s)
file.writelines(a)
file.close()
file = open("d:/CODE_FILE/CODE_Python/a.txt", "r")
s = file.read()
print(s)
file.close()
file = open("d:/CODE_FILE/CODE_Python/a.txt", "r")
l = file.readlines()
print(l)
