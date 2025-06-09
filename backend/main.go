package main

import (
	"log"

	"github.com/gustavoocosta/vethouse/database"
	"github.com/gustavoocosta/vethouse/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	// Inicializa a conexão com o banco de dados
	database.Connect()

	// Cria uma nova instância do roteador Gin
	r := gin.Default()

	// Configura as rotas da aplicação
	routes.SetupRoutes(r)

	// Inicia o servidor na porta 8080
	log.Fatal(r.Run(":8080"))
}
