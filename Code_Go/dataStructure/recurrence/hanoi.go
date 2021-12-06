package main

import (
	"fmt"
)

func hanoi_r(n int, from, to, via byte) {
	/* PC */
	/* 0 */
	if n == 1 {
		fmt.Printf("Move %c -> %c\n", from, to)
	} else {
		/* 1 */ hanoi_r(n-1, from, via, to)
		/* 2 */ hanoi_r(1, from, to, via)
		/* 3 */ hanoi_r(n-1, via, to, from)
		/* 4 */
	}
}

type frame struct {
	pc, n         int
	from, to, via byte
}

func call(n int, from, to, via byte) {
	stk[top] = frame{0, n, from, to, via}
	top++
}

var (
	stk [64]frame
	top int
)

func hanoi(n int, from, to, via byte) {
	call(n, from, to, via)
	for top > 0 {
		f := &stk[top-1]
		switch f.pc = f.pc + 1; f.pc - 1 {
		case 0:
			if f.n == 1 {
				fmt.Printf("Move %c -> %c\n", f.from, f.to)
				top--
			}
		case 1:
			call(f.n-1, f.from, f.via, f.to)
		case 2:
			call(1, f.from, f.to, f.via)
		case 3:
			call(f.n-1, f.via, f.to, f.from)
		case 4:
			top--
			/*default:
			panic("run error")*/
		}
	}

}

func main() {
	hanoi(6, 'A', 'B', 'C')
}
