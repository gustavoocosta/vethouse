package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
)

// DB é a instância global da conexão com o banco de dados.
var DB *gorm.DB

// Connect inicializa a conexão com o banco de dados MySQL.
func Connect() {
	dsn := "gcosta:costa0227@(127.0.0.1:3306)/clinica?charset=utf8mb4&parseTime=True&loc=Local"
	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Erro ao conectar com o banco de dados: ", err)
	}
}
