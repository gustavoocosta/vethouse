# 🐾 Vethouse - Sistema Web para Clínica Veterinária

Este é um sistema web completo para gerenciamento de uma clínica veterinária, construído com **Golang (Gin + GORM)** no backend, **MySQL** como banco de dados, e **HTML, CSS e JavaScript** no frontend.

---

## 🧰 Tecnologias Utilizadas

| Camada         | Tecnologias                   |
| -------------- | ----------------------------- |
| Front-end      | HTML, CSS, JavaScript         |
| Back-end / API | Golang (Gin Framework + GORM) |
| Banco de Dados | MySQL                         |
| Documentação   | PDF (prints e explicações)    |

---

## 📦 Estrutura do Projeto

Vethouse/
├── backend/
│ ├── main.go
│ ├── controllers/
│ │ └── animal_controller.go
│ ├── models/
│ │ └── animal.go
│ ├── routes/
│ │ └── animal_routes.go
│ └── database/
│ └── connection.go
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── database/
│ └── schema.sql
├── go.mod
└── README.md


---

## ⚙️ Como Configurar e Executar 
### 1. Pré-requisitos

- Go 1.18 ou superior
- MySQL instalado e rodando localmente
- Navegador web (para usar o frontend)

---

### 2. Banco de Dados

1. Execute o script `database/schema.sql` no seu MySQL:
```sql
CREATE DATABASE IF NOT EXISTS clinica;
USE clinica;

CREATE TABLE IF NOT EXISTS animais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  especie VARCHAR(50),
  raca VARCHAR(50),
  idade INT,
  tutor VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS servicos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(50),
  data DATE,
  descricao TEXT,
  animal_id INT,
  FOREIGN KEY (animal_id) REFERENCES animais(id)
);
````
2. Configure a string de conexão no arquivo backend/database/connection.go:

```` dsn := "root:SENHA@tcp(127.0.0.1:3306)/clinica?charset=utf8mb4&parseTime=True&loc=Local" ````

3. Executando o Back-end
  1. No terminal, vá até a pasta do backend:
```cd Vethouse/backend```
  2. Inicialize o módulo Go (se ainda não existir):
```go mod init vethouse```
  3. Certifique-se de que os imports no main.go estejam assim:
```
 import (
    "vethouse/database"
    "vethouse/routes"
)
```
4. Execute:
```go run main.go```
( O servidor estará disponível em: http://localhost:8080 )

🧠 Funcionalidades Atuais
Cadastro de animais

Listagem de animais

Armazenamento em banco de dados via API REST

🔧 API Endpoints
Método	Rota	Descrição
GET	/animais	Lista todos os animais
POST	/animais	Cadastra um novo animal

👨‍💻 Autor
Gustavo dos Santos Oliveira Costa
Analista e desenvolvedor de sistemas
GitHub: [github.com/gustavoocosta](https://github.com/gustavoocosta)
LinkedIn: [linkedin.com/in/gustavosocosta](https://www.linkedin.com/in/gustavosocosta/)
