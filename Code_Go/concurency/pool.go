package main

import (
	"fmt"
	"os"
	"time"
)

func main() {
	// var stdoutBuff bytes.Buffer
	// defer stdoutBuff.WriteTo(os.Stdout)

	intStream := make(chan int, 4)
	go func() {
		defer close(intStream)
		// defer fmt.Fprintln(&stdoutBuff, "Producer Done")
		for i := 0; i < 5; i++ {
			// fmt.Fprintf(&stdoutBuff, "Sending: %d\n", i)
			intStream <- i
		}
		time.Sleep(10 * time.Second)
	}()

	for integer := range intStream {
		fmt.Fprintf(os.Stdout, "Received %v.\n", integer)
	}
}
