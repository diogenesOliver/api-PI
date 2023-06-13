# Documentação - WIP

## API
<p>
Aqui temos a documentação relacionada apena ao beckend do projeto, desde a clonagem do projeto, inicialização do servidor, inicialização do container Docker do banco de dados e tecnologia utilizadas para configura a API.
</p>

## Tecnologias
<p>
Abaixo temos as principais tecnologia que utilizamos para criar e configurar nossa API
</p>

- <p><strong>Express</strong> para criação e manipulação de rotas e métodos HTTP <strong>(GET, POST)</strong> </p>

- <p><strong>Docker</strong> para gerenciamneto de containers, hospedando nossa api no <strong>localhos:3000</strong> e nosso banco de dados</p>

- <p><strong>Postgres</strong> banco de dados relacional escolhido para armazenar os dados das requizições</p>

- <p><strong>Prisma</strong> ORM utilizado para configurar o banco de dados e suas tabelas integrando com o Node</p>

- <p><strong>Typescript</strong> linguagem de programação utilizada em toda API</p>

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