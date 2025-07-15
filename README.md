# 🛍️ Loja Meteora - Projeto Fullstack

Este é o repositório do projeto de e-commerce "Loja Meteora", desenvolvido para demonstrar habilidades em desenvolvimento web fullstack, desde a criação de uma API RESTful até a construção de um front-end reativo.

---

## 🚧 Status do Projeto

**Em Desenvolvimento**

---

## ✨ Funcionalidades

* **API RESTful**: Back-end robusto para servir os dados da loja.
* **Listagem de Produtos**: Exibição dos produtos consumindo dados da API.
* **Banco de Dados**: Persistência de dados com PostgreSQL.
* **(Em breve)**: Autenticação de usuários, carrinho de compras e finalização de pedidos.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

#### **Back-end**

* **[Node.js](https://nodejs.org/)**
* **[Express.js](https://expressjs.com/pt-br/)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **[Prisma](https://www.prisma.io/)**: ORM para interação com o banco de dados.
* **[PostgreSQL](https://www.postgresql.org/)**: Banco de dados relacional.

#### **Front-end**

* *(Em planejamento)* **[React](https://react.dev/)** ou **[Next.js](https://nextjs.org/)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)** / **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)**

#### **Ferramentas e Ambiente**

* **[Docker](https://www.docker.com/)**: Para containerização do banco de dados.
* **[Git](https://git-scm.com/)** & **[GitHub](https://github.com/)**: Para versionamento de código.

---

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo.

### **Pré-requisitos**

* **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
* **[Docker](https://www.docker.com/products/docker-desktop/)** e **Docker Compose**

### **Instalação**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/loja-meteora-fullstack.git](https://github.com/seu-usuario/loja-meteora-fullstack.git)
    cd loja-meteora-fullstack
    ```

2.  **Configuração do Back-end:**
    ```bash
    # Navegue até a pasta do back-end
    cd backend

    # Instale as dependências
    npm install

    # Inicie o container do banco de dados com Docker
    docker-compose up -d

    # Execute as migrações do Prisma para criar as tabelas no banco
    npx prisma migrate dev

    # Inicie o servidor de desenvolvimento
    npm run dev
    ```
    O servidor back-end estará disponível em `http://localhost:3001`.

3.  **Configuração do Front-end:**
    ```bash
    # (Instruções a serem adicionadas quando o front-end for desenvolvido)
    ```

---

## 📋 Endpoints da API

A API possui os seguintes endpoints disponíveis:

* `GET /api/produtos`: Retorna a lista de todos os produtos.
* *(Outros endpoints a serem adicionados)*

---

## ✒️ Autor

Desenvolvido por **Roberto Silva**.

* **LinkedIn**: [Roberto Silva](https://www.linkedin.com/in/roberto-silva-dev-full-stack/)
* **GitHub**: [@RobertoSilvaDevFullStack](https://github.com/RobertoSilvaDevFullStack)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o ficheiro `LICENSE` para mais detalhes.
