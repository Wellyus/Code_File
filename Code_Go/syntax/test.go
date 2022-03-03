package main

import (
	"fmt"
	"sync"
)

type SafeCounter struct {
	v   map[string]int
	mux sync.Mutex
}

func (c *SafeCounter) Inc(key string) {
	c.mux.Lock()
	defer c.mux.Unlock()
	c.v[key]++
}

func (c *SafeCounter) Value(key string) int {
	c.mux.Lock()
	defer c.mux.Unlock()
	return c.v[key]
}

func main() {
	c := SafeCounter{
		v: make(map[string]int),
	}

	for i := 0; i < 10000; i++ {
		go c.Inc("somekey")
	}

	defer func() {
		fmt.Println(c.Value("somekey"))
	}()
}
