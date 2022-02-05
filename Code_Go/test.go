package main

import (
	"fmt"
	"net/http"
	"reflect"
	"runtime"
)

func main() {
	server := http.Server{
		Addr: ":8888",
	}
	http.HandleFunc("/helloo", hello)
	http.HandleFunc("/world", log(world))
	server.ListenAndServe()
}

type HelloHandler struct{}

func (h *HelloHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello")
}

type WorldHandler struct{}

func (x *WorldHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "world")
}

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "hello")
}

func world(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "world")
}

func log(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		name := runtime.FuncForPC(reflect.ValueOf(h).Pointer()).Name()
		fmt.Println("Handler function called - " + name)
		h(w, r)
	}
}
