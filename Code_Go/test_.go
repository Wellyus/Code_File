package main

import "fmt"

func main() {
	a := []byte("hello")
	for index, value := range a {
		fmt.Println(index, value)
	}
}
