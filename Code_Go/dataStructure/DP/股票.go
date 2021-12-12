func maxProfit(prices []int) int {
	len := len(prices)
	result := [len][2]int{}
	result[0][0], result[0][1] = 0, -prices[0]
	for i := 1; i < len(prices); i++ {
		result[i][0] = max(result[i-1][0], result[i-1][1]+prices[i1])
		result[i][1] = max(result[i-1][0]-prices[i], result[i-1][1]))
	}
	return result[len-1][0]
}
func maxProfit(prices []int) int {
	len := len(prices)
	notOwn, own := 0, -prices[0]
	for i := 1; i < len; i++ {
		notOwn, own = max(notOwn, own+prices[i]), max(notOwn-prices[i], own)
	}
	return notOwn
}
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}