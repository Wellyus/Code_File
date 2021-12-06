package main

import "fmt"

func main() {
	a := 0
	for a >= 0 {
		switch a++; a - 1 {
		case 0:
			fmt.Print(0)
		case 1:
			fmt.Print(1)
		}
	}

}
