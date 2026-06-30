# 🚀 Desafio Full Stack (Frontend + Backend)

Projeto full stack desenvolvido com **Node.js (backend)** e **React (frontend)**, utilizando TypeScript, MySQL e tecnologias modernas.

---

# 📌 Tecnologias utilizadas

## Backend
- Node.js
- Express
- TypeScript
- Sequelize (ORM)
- MySQL2
- dotenv
- ts-node-dev

## Frontend
- React
- Vite
- TypeScript
- React Router DOM
- Axios
- TailwindCSS

---

# ⚙️ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- Node.js (versão 18 ou superior)
- npm ou yarn
- MySQL
- Git (opcional)

---

# 🗄️ Configuração do banco de dados

Crie o banco no MySQL:

```sql
CREATE DATABASE banco_agilize;

```


🔐 Configuração do backend (.env)

Crie um arquivo .env dentro da pasta backend:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=banco_agilize
DB_PORT=3306

PORT=3000



▶️ Como rodar o projeto

📦 Backend

Execute os comandos:
```
cd backend
npm install
npm run dev
```
o Servidor rodará em http://localhost:3000


💻 Frontend

Execute os comandos:
```
cd frontend
npm install
npm run dev
```

O Servidor rodará em http://localhost:5173



📡 Rotas da API

```
GET    /contas
GET    /contas/:id
POST   /contas
POST   /contas/:id/saque
POST   /transferencia
```
