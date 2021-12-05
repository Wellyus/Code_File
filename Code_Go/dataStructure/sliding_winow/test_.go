package main

import (
	"fmt"
)

func main() {
	s, p := "abca", "abc"
	fmt.Println(findAnagrams(s, p))
}

func findAnagrams(s string, p string) (result []int) {
	end := len(s) - len(p)
	if end < 0 {
		return
	}
	arr := [26]int{}
	diff := 0
	for index, value := range p {
		arr[s[index]-'a']++
		arr[value-'a']--
	}
	for _, value := range arr {
		if value != 0 {
			diff++
		}
	}
	if diff == 0 {
		result = append(result, 0)
	}
	for index, _ := range s[1 : end+1] {
		if arr[s[index]-'a'] == 1 {
			diff--
		}
		if arr[s[index]-'a'] == 0 {
			diff++
		}
		arr[s[index]-'a']--
		indexS := index + len(p)
		if arr[s[indexS]-'a'] == 0 {
			diff++
		}
		if arr[s[indexS]-'a'] == -1 {
			diff--
		}
		arr[s[indexS]-'a']++
		if diff == 0 {
			result = append(result, index+1)
		}
	}
	return
}
