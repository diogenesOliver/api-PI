# Documentation - WIP

## Tables
<br>


<strong>UserData</strong>

```
model UserData {
  id        Int        @id @default(autoincrement())
  email         String
  senha         String
  nome          String @unique
  idade         Int
  peso          Float
  altura        Float
  res_fisica    String
  res_alimentar String
  nivel         String
}
```
<br>

<strong>Exercises</strong>

```
model Exercicios {
  id              Int    @id @default(autoincrement())
  nome_exerc      String @unique
  descricao_exerc String
  tipo_exerc      String
}
```
<br>

<strong>Alimentation</strong>
```
model Alimentacao {
  id               Int    @id @default(autoincrement())
  nome_alimentacao String
  descricao        String
  tipo_dieta       String
}
```