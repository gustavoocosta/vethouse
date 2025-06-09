package main

import (
	"log"

	"vethouse/database"
	"vethouse/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	database.Connect()

	r := gin.Default()
	routes.SetupRoutes(r)

	log.Fatal(r.Run(":8080"))
}
