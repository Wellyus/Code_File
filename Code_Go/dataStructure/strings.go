package main

import (
	"fmt"
)

func canConstruct(ransomNote string, magazine string) bool {
	mapForMagzine := map[rune]int{}
	for _, char := range magazine {
		mapForMagzine[char] = mapForMagzine[char] + 1
	}
	for _, char := range ransomNote {
		mapForMagzine[char] = mapForMagzine[char] - 1
		if mapForMagzine[char] < 0 {
			return false
		}
	}
	return true
}

func main() {
	a := map[rune]int{}
	fmt.Println(a['s'])
}
