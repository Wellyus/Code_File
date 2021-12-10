package main

func main() {

}

func trap(height []int) int {
	left, right := 0, len(height)-1
	leftMax, rightMax := height[left], height[right]
	sum := 0
	for left <= right {
		if leftMax < rightMax {
			if height[left] > leftMax {
				leftMax = height[left]
			}
			sum += leftMax - height[left]
			left++

		} else {
			if height[right] > rightMax {
				rightMax = height[right]
			}
			sum += rightMax - height[right]
			right--

		}
	}
	return sum
}

/*
func trap(height []int) int {
	leftMax := make([]int, len(height))
	rightMax := make([]int, len(height))
	max := height[0]
	for index, value := range height {
		if value > max {
			max = value
		}
		leftMax[index] = max
	}
	max = height[len(height)-1]
	for i := len(height) - 1; i >= 0; i-- {
		if height[i] > max {
			max = height[i]
		}
		rightMax[i] = max
	}
	sum := 0
	for index := range height {
		if leftMax[index] < rightMax[index] {
			sum += leftMax[index] - height[index]
		} else {
			sum += rightMax[index] - height[index]
		}
	}
	return sum
}
*/
