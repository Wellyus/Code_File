package main

import (
	"fmt"
)

func fibonacci() func() int {
	pre, cur := 0, 1
	return func() int {
		cache := pre
		pre, cur = cur, pre+cur
		return cache
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}
