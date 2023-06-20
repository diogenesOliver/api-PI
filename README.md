<h2>MyFit - Backend documentation</h2>

<img height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
<img height="30px"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
<img height="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          

### Sumário

- [Api](#api)
- [Tecnologias](#tecnologias)
- [Tabelas](#tabelas)
- [Rotas](#rotas)
- [Database](#database)
- [Configurações do projeto](#execute)

<div id="api">

## API
<p>
Aqui temos a documentação relacionada apena ao beckend do projeto, desde a clonagem do projeto, inicialização do servidor, inicialização do container Docker do banco de dados e tecnologia utilizadas para configura a API.
</p>

</div>

<div id="tecnologias">

## Tecnologias
<p>
Abaixo temos as principais tecnologia que utilizamos para criar e configurar nossa API
</p>

- `Express` para criação e manipulação de rotas e métodos HTTP <strong>(GET, POST)</strong> </p>

- `Docker` para gerenciamneto de containers, hospedando nossa api no <strong>localhos:3000</strong> e nosso banco de dados</p>

- `Postgres` banco de dados relacional escolhido para armazenar os dados das requizições</p>

- `Prisma` ORM utilizado para configurar o banco de dados e suas tabelas integrando com o Node</p>

- <p><strong>Typescript</strong> linguagem de programação utilizada em toda API</p>

</div>

<div id="tabelas">

## Tabelas
<br>
<strong>UserData</strong>

```prisma
model UserData {
  id              Int        @id @default(autoincrement())
  email           String
  confirmar_email String
  senha           String
  confirmar_senha String
  nome            String @unique
  idade           Int
  peso            Float
  altura          Float
  res_fisica      String
  res_alimentar   String
  Exercicios      Exercicios[]
  Alimentacao     Alimentacao[]
}
```
<br>

<strong>Exercícios</strong>

```prisma
model Exercicios {
  id              Int    @id @default(autoincrement())
  nome_exerc      String @unique
  descricao_exerc String
  tipo_exerc      String
  exerc_relacao   UserData @relation(fields: [exercId], references: [id])
  exercId         Int
}
```
<br>

<strong>Alimentação</strong>
```prisma
model Alimentacao {
  id               Int    @id @default(autoincrement())
  nome_alimentacao String
  descricao        String
  tipo_dieta       String
  receita_relacao  UserData @relation(fields: [alimentacaoId], references: [id])
  alimentacaoId    Int
}
```

</div>

<br>

<div id="rotas">

## Rotas

- `GET /users`      Retorna todos os usuários inseridos no banco de dados
- `GET /recipes`    Retorna todas as receitas
- `GET /exercises`  Retorna tods os exercício
- `POST /register`  Rota para cadastro de usuário
- `POST /login`     Rota para o login do usuário
<br>

</div>

<div id="database">

## Banco de dados

Para armazenar os dados do projeto, optamos por utilizar o banco de dados `postgreSQL`. Geramos o hospedamos nosso banco de dados em um container Docker. Abaixo temos o nosso `docker-compose.yaml`, onde definimos as configurações do nosso container.

<br>

```yaml
version: "3"

services:
  db-postgres-evento:
    image: postgres:alpine
    ports:
      - "5438:5432"
    container_name: "db-postgres-evento"
    restart: always
    volumes:
      - ./database-postgres-apiPI:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: "${POSTGRES_USER}"
      POSTGRES_PASSWORD: "${POSTGRES_PASSWORD}"

volumes:
  db-postgres-evento:
```

- Depois de definidas todas as configurações do nosso container postgres, rodamos o seguinte comando.

````
docker compose up -d
````
</div>

<br>

<div id="execute">

## Executando o projeto

Para que possamos inicializar o nosso servidor, primeiramente devemos instalar todas as dependências do nosso projeto, para isso devemos executar o seguinte comando nosso terminal `npm install --save-dev`. Isso na pasta raiz, onde está todas as dependência do nosso Backend, para instalar as dependeências do nosso Frontend, navegue até a pasta `web` com `cd web` em seguida execute `npm install --save-dev`.

Para inicializar o nosso servidor executamos os seguinte comando `npm run dev`, após esse comando o servidor é inicializado no `http://localhost:3000/`.

```typescript
import { app } from "./main";
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    console.log(`Server running on port: ${PORT}`)
})
```
<br>

- WIP: <strong>Estamos trabalhando para que o ambiente de inicialização do nosso servidor esteja por completo no Doker. Gerando uma imagem no Dockerfile e iniciar um novo container do nosso servidor a partir dessa imagem através do comando</strong>

```
docker build -t <IMAGE_NAME> .
```

</div>