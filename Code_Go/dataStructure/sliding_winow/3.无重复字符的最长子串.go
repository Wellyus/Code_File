func lengthOfLongestSubstring(s string) int {
	left, right := 0, 1
	len := len(s)
	max := 1
	Map := map[byte]int{}
	Map[s[0]] = 1
	for left < right {
		for Map[s[right]] == 0 && right <= len {
			Map[s[right]]++
			right++
			max = max(max, right-left)
		}
		Map[left]--
		left++
	}
	return max
}