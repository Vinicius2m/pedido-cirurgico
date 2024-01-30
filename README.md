<h1 align="center">
      App Pedidos Cirúrgicos 
</h1>

<h3 align="center">
    Aplicação para gerenciamento de pedidos cirúrgicos.
</h3>

#

# Tabela de conteúdos

<!--ts-->

- [](#)
- [Tabela de conteúdos](#tabela-de-conteúdos)
  - [💻 Sobre o projeto](#-sobre-o-projeto)
  - [⚙️ Funcionalidades](#️-funcionalidades)
  - [🚀 Como executar o projeto](#-como-executar-o-projeto)
    - [Pré-requisitos](#pré-requisitos)
      - [🎲 Rodando o Backend (servidor)](#-rodando-o-backend-servidor)
      - [🧭 Rodando a aplicação web (Frontend)](#-rodando-a-aplicação-web-frontend)
      - [Rodando a aplicação por inteiro com Docker Compose](#rodando-a-aplicação-por-inteiro-com-docker-compose)
  - [🛠 Tecnologias](#-tecnologias)
    - [**Website** (React + TypeScript)](#website-react--typescript)
    - [**Server** (NestJS + TypeScript)](#server-nestjs--typescript)
  - [🦸 Autor](#-autor)

## 💻 Sobre o projeto

🏥 App Pedidos Cirúrgicos - é uma aplicação simples e direta para gerenciamento
de pedidos cirúrgicos.

---

## ⚙️ Funcionalidades

- [x] Médico pode cadastrar um pedido cirúrgico
- [x] Médico pode editar um pedido cirúrgico
- [x] Médico pode excluir um pedido cirúrgico
- [x] Médico pode visualizar todos os pedidos cirúrgicos
- [x] Médico pode visualizar um pedido cirúrgico

## 🚀 Como executar o projeto

Este projeto é divido em três partes:

1. Backend (pasta server)
2. Frontend (pasta web)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado
para funcionar, e o backend depende do banco de dados estar rodando também.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes
ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/),
[Docker]() e [Docker Compose](). Além disto é bom ter um editor para trabalhar
com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:Vinicius2m/pedido-cirurgico.git

# Acesse a pasta do projeto no terminal/cmd
$ cd pedido-cirurgico

# Vá para a pasta server
$ cd cirurgic-request-backend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start:dev

# O servidor inciará na porta:8000 - acesse http://localhost:8000 para documentação completa da API

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:Vinicius2m/pedido-cirurgico.git

# Acesse a pasta do projeto no terminal/cmd
$ cd pedido-cirurgico

# Vá para a pasta frontend
$ cd cirurgic-request-frontend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:5173 - acesse http://localhost:5173

```

#### Rodando a aplicação por inteiro com Docker Compose

```bash

# Clone este repositório
$ git clone git@github.com:Vinicius2m/pedido-cirurgico.git

# Acesse a pasta do projeto no terminal/cmd
$ cd pedido-cirurgico

# Utilize o Docker Compose para subir todos os containers
$ docker-compose up

# O frontend ficará na porta 3000, o back na 8000 e o banco na 3306 - acesse http://localhost:3000 para acessar o frontend

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Axios](https://github.com/axios/axios)**
- **[Styled Components](https://styled-components.com/)**
- **Yup**

> Veja o arquivo package.json

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server** ([NestJS]() + [TypeScript](https://www.typescriptlang.org/))

- **[Prisma](https://www.prisma.io/)**
- **[MySQL](https://www.mysql.com/)**
- **[Swagger](https://swagger.io/)**
- **[Jest](https://jestjs.io/)**

> Veja o arquivo package.json

**Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions:
  **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
- Commit Conventional:
  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**
- Ícones: **[React Icons](https://react-icons.github.io/react-icons/)**
- Fontes: **[Nunito](https://fonts.google.com/specimen/Nunito)**

---

## 🦸 Autor

Vinícius de Freitas

[![Linkedin Badge](https://img.shields.io/badge/-Vinicius-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/vinicius-de-freitas/)
[![Gmail Badge](https://img.shields.io/badge/-viniciusfreitas144@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:viniciusfreitas144@gmail.com)](mailto:viniciusfreitas144@gmail.com)
