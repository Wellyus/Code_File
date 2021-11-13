import threading
class Producer(threading.Thread):
    def __init__(self, threadname):
        threading.Thread.__init__(self, name = threadname)
    def run(self):
        global x
        if x == 1000000:
            pass
        else:
            for i in range(1000000):
                x = x + 1
        print(x)
class Consumer(threading.Thread):
    def __init__(self, threadname):
        threading.Thread.__init__(self, name = threadname)
    def run(self):
        global x
        if x == 0:
            pass
        else:
            for i in range(1000000):
                x = x - 1
        print(x)
con = threading.Condition()
x = 0
p = Producer("producer")
c = Consumer("consumer")
p.start()
c.start()
p.join()
c.join()
print(x)