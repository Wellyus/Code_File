package main

import (
	"fmt"
	"log"
	"net/http"
)

func sayHelloHandler(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	// fmt.Println(r.Form)
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	for key, value := range r.Form {
		fmt.Println("key: ", key, " val: ", value)
	}
	fmt.Fprintf(w, "hello world\n")
}

func main() {
	http.HandleFunc("/", sayHelloHandler)
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
