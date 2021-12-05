package main

import "fmt"

func main() {
	fmt.Println(numTrees((3)))
}

var mapForResult = map[int]int{}

func solve(a []int) int {
	if mapForResult[len(a)] != 0 {
		return mapForResult[len(a)]
	}
	sum := 0
	for index, _ := range a {
		left, right := a[0:index], a[index+1:]
		a := solve(left)
		mapForResult[len(left)] = a
		b := solve(right)
		mapForResult[len(right)] = b
		sum += a * b
	}
	return sum
}

func numTrees(n int) int {
	a := make([]int, n)
	mapForResult[0], mapForResult[1] = 1, 1
	return solve(a)
}
