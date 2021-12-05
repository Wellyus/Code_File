func findAnagrams(s string, p string) []int {
	// aaaaa ab
	end := len(s) - len(p)
	result := []int{}
	if end < 0 {
		return result
	}
	arrS, arrP := [26]int{}, [26]int{}
	for index, value := range p {
		arrS[s[index]-'a']++
		arrP[value-'a']++
	}
	if arrS == arrP {
		result = append(result, 0)
	}
	// abcd  ac
	for index, _ := range s[1 : end+1] {
		arrS[s[index]-'a']--
		char := s[index+len(p)]
		arrS[char-'a']++
		if arrS == arrP {
			result = append(result, index+1)
		}
	}
	return result
}
