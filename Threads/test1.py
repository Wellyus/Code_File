import threading
import time
class mythread(threading.Thread):
    def __init__(self, threadname):
        threading.Thread.__init__(self, name = threadname)
    def run(self):
        print(self.name)
t1 = mythread('Wellyus')
t1.run()
print(t1.name)
print(t1.name)
t1.name = 'Frida'
print(t1.name)