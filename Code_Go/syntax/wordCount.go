package main

import (
	"fmt"
	"strings"
)

func WordCount(s string) map[string]int {
	str := strings.Fields(s)
	mapForS := map[string]int{}
	for _, value := range str {
		mapForS[value] = mapForS[value] + 1
	}
	return mapForS
}

func main() {
	fmt.Println(WordCount("Frida Frida Frida Wellyus"))
	for key, value := range WordCount("Frida Frida Frida Wellyus") {
		fmt.Println(key, value)
	}
	s := []string{fmt.Sprint(5), "is", "a", "string"}
	slice := strings.Join(s, "__")
	fmt.Println(slice)
}
