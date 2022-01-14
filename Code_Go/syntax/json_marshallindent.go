package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Post struct {
	Id       int       `json:"id"`
	Content  string    `json:"content"`
	Author   Author    `json:"author"`
	Comments []Comment `json:"comments"`
}

type Author struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type Comment struct {
	Id      int    `json:"id"`
	Content string `json:"content`
	Author  string `json:"author`
}

func main() {
	post := Post{
		Id:      1,
		Content: "well done",
		Author: Author{
			Id:   1,
			Name: "wellyus",
		},
		Comments: []Comment{
			{
				Id:      1,
				Content: "well",
				Author:  "max",
			},
			{
				Id:      2,
				Content: "good",
				Author:  "tet",
			},
		},
	}

	output, err := json.Marshal(&post)
	if err != nil {
		fmt.Println("Error marshalling to JSON", err)
		return
	}
	err = os.WriteFile("post.json", output, 0644)
	if err != nil {
		fmt.Println("Error writing JSON to file:", err)
		return
	}

	jsonFile, err := os.Create("post.json")
	if err != nil {
		fmt.Println("Error creating JSON file:", err)
		return
	}
	encoder := json.NewEncoder(jsonFile)
	err = encoder.Encode(&post)
	if err != nil {
		fmt.Println("Error encoding JSON to file:", err)
		return
	}
}
