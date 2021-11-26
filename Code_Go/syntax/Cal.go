package main

import (
	"fmt"
)

func main() {
	var number1, number2, number3 float64
	var operation, op string
	fmt.Println("Enter the calculation: ")
	fmt.Scanf("%f %s %f", &number1, &operation, &number2)
	for {
		fmt.Scanf("%s", &op)
		if op != "=" {
			fmt.Scanf("%f", &number3)
		}
		switch operation {
		case "+":
			switch {
			case op == "*":
				number2 = number2 * number3
			case op == "/":
				number2 = number2 / number3
			case op == "%":
				number2 = float64(int(number2) % int(number3))
			default:
				number1, operation, number2 = number1+number2, op, number3
			}
		case "-":
			switch {
			case op == "*":
				number2 = number2 * number3
			case op == "/":
				number2 = number2 / number3
			case op == "%":
				number2 = float64(int(number2) % int(number3))
			default:
				number1, operation, number2 = number1-number2, op, number3
			}
		case "*":
			number1, operation, number2 = number1*number2, op, number3
		case "/":
			number1, operation, number2 = number1/number2, op, number3
		case "%":
			number1, operation, number2 = float64(int(number1)%int(number2)), op, number3
		}
		if op == "=" {
			break
		}
	}
	fmt.Printf("%f", number1)
}
