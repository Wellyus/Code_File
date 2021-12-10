package main

import (
	"fmt"
	"sync"
)

func main() {
	// abc cba
	var lock sync.Mutex
	go func() {
		for {
			lock.Lock()
			fmt.Print("_><>")
			lock.Unlock()
		}
	}()
	for {
		lock.Lock()
		fmt.Print("<><_")
		lock.Unlock()
	}
}
