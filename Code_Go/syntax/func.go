package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	a := [...]int{1, 2, 3}
	b := [][]int{{1, 2}, {3, 4}}
	fmt.Println(a, b)
	fmt.Fprintln(os.Stderr, "hello from os")
	defer func() {
		if r := recover(); r != nil {
			log.Print(r)
		}
	}()
	panic(1)
}
