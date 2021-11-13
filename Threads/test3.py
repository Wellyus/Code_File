import threading
import time
class mythread(threading.Thread):
	def __init__(self, threadname):
		threading.Thread.__init__(self, name = threadname)
	def run(self):
		global x
		# lock.acquire()
		for i in range(3):
			x = x + 1
		# lock.release()
		print(x)
lock = threading.Lock()
t1 = []
for i in range(10):
	t = mythread(str(i))
	t1.append(t)

x = 0
for i in t1:
	i.start()