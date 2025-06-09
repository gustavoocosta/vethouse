Claro! Aqui está um **README completo e detalhado** para o seu sistema web de clínica veterinária, explicando todas as partes do projeto:

---

# 🐾 Sistema Web - Clínica Veterinária

Este projeto tem como objetivo desenvolver um sistema web completo para gerenciar uma clínica veterinária, utilizando tecnologias como **Golang, MySQL, HTML, CSS e JavaScript**. O sistema permite o **cadastro de animais** e a **visualização dos animais cadastrados**, servindo como base para expansão futura com funcionalidades como registro de serviços (consultas, exames, cirurgias etc.).

---

## 🧰 Tecnologias Utilizadas

| Camada         | Tecnologias                   |
| -------------- | ----------------------------- |
| Front-end      | HTML, CSS, JavaScript         |
| Back-end / API | Golang (Gin Framework + GORM) |
| Banco de Dados | MySQL                         |
| Documentação   | PDF (prints e explicações)    |

---

## 📁 Estrutura do Projeto

```
clinica_veterinaria/
├── frontend/         # Interface web
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/          # Código do back-end em Go
│   ├── main.go
│   ├── controllers/
│   │   └── animal_controller.go
│   ├── models/
│   │   └── animal.go
│   ├── routes/
│   │   └── animal_routes.go
│   └── database/
│       └── connection.go
├── database/
│   └── schema.sql     # Script para criação do banco
├── documentacao.pdf   # (não incluso aqui – será gerado à parte)
└── README.txt         # Instruções
```

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos

* Golang instalado (1.18 ou superior)
* MySQL instalado e rodando localmente
* Navegador Web (Google Chrome ou similar)

---

### 2. Configuração do Banco de Dados

1. Acesse o MySQL e execute o script `database/schema.sql` para criar o banco:

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
```

---

### 3. Configuração do Back-end

1. Navegue até a pasta `backend/`.
2. Edite o arquivo `database/connection.go` e altere a string de conexão com o seu usuário e senha do MySQL:

```go
dsn := "root:SENHA@tcp(127.0.0.1:3306)/clinica?charset=utf8mb4&parseTime=True&loc=Local"
```

3. No terminal, execute o servidor com o comando:

```bash
go run main.go
```

O back-end estará disponível em: `http://localhost:8080/`

---

### 4. Executando o Front-end

1. Vá até a pasta `frontend/`
2. Dê dois cliques em `index.html` ou abra no navegador
3. Use o formulário para cadastrar animais
4. A lista de animais cadastrados será exibida automaticamente na página

---

## 🧠 Funcionalidades

### ✅ Cadastro de Animais

* Campos: nome, espécie, raça, idade, tutor
* Envio via formulário HTML (JavaScript + Fetch API)
* Armazenamento em banco de dados via API REST

### ✅ Listagem de Animais

* Exibe os dados cadastrados na tela
* Atualização automática ao cadastrar um novo animal

---

## 🔧 Estrutura da API (Golang)

### Rotas disponíveis

| Método | Rota       | Descrição               |
| ------ | ---------- | ----------------------- |
| GET    | `/animais` | Lista todos os animais  |
| POST   | `/animais` | Cadastra um novo animal |

---

## 📷 Interface do Sistema

> A interface é simples e direta para permitir uma visualização clara dos dados.
> No PDF de documentação, prints serão incluídos com exemplos de uso real da aplicação.

---

## 📦 Deploy e Melhorias Futuras

Este projeto pode ser expandido com:

* Cadastro de serviços (consultas, cirurgias etc.)
* Histórico de atendimentos por animal
* Autenticação de usuários (login de veterinários)
* Painel administrativo com gráficos (Power BI ou Chart.js)
* Responsividade para mobile (com Bootstrap)

---

## 👨‍💻 Autor

**Gustavo dos Santos Oliveira Costa**
Estudante de Análise e Desenvolvimento de Sistemas
GitHub: [github.com/seuusuario](https://github.com/seuusuario)
LinkedIn: [linkedin.com/in/gustavosocosta](https://www.linkedin.com/in/gustavosocosta/)

