# CRUD Experiencia Creativa

Uma aplicação full-stack moderna construída com React, NodeJs, TypeScript e MySQL, apresentando uma interface de usuário limpa e intuitiva utilizando Tailwind CSS.

## Visão Geral

Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) full-stack que demonstra práticas modernas de desenvolvimento web. Ele combina um frontend React com um backend Node.js/Express e banco de dados MySQL.

## Tecnologias Utilizadas

- **Frontend:**
  - React 18
  - TypeScript
  - Tailwind CSS
  - React Router
  - Axios
  - Zod (Validação de Esquemas)

- **Backend:**
  - Node.js
  - Express
  - MySQL2
  - CORS
  - Dotenv

- **Ferramentas de Desenvolvimento:**
  - Vite
  - TypeScript
  - ESLint
  - Nodemon
  - Concurrently

## Funcionalidades

- Interface moderna e responsiva com Tailwind CSS
- Desenvolvimento com tipagem estática usando TypeScript
- Validação de formulários com Zod
- Feedback em tempo real com React Hot Toast
- Arquitetura RESTful API
- Integração com banco de dados MySQL
- Configuração de variáveis de ambiente

## Começando

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Servidor MySQL
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone [url-do-repositorio]
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```
     DB_HOST=localhost
     DB_USER=seu_usuario
     DB_PASSWORD=sua_senha
     DB_NAME=nome_do_banco
     PORT=3000
     ```
   - Substitua os valores acima com suas credenciais do banco de dados MySQL

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

Isso iniciará tanto o servidor frontend quanto o backend simultaneamente.

## Estrutura do Projeto

```
├── backend/          # Servidor Express e rotas da API
├── src/              # Aplicação React frontend
│   ├── components/   # Componentes reutilizáveis
│   ├── pages/        # Componentes de páginas
│   └── utils/        # Funções utilitárias
├── MySQL/            # Scripts e configurações do banco de dados
└── public/           # Arquivos estáticos
```

## Scripts Disponíveis

- `npm run dev` - Inicia os servidores de desenvolvimento (frontend e backend)
- `npm run build` - Constrói a versão de produção
- `npm start` - Inicia o servidor de produção

## Licença

Este projeto está licenciado sob os termos especificados no arquivo LICENSE.

## Autor

Feito por Matheus Moreira