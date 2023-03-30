<h2>PI - Projeto integrador SENAC RS</h2>

<br>

<p>
    Este repositório representa a API Backend do projeto integrador do Senac-RS 
</p>

<br>

****

- <h3>Conceitos e implementações no Backend</h3>

<br>

- [x] Clean Architecture
- [x] S-OLID Single Responsability
- [x] Integração Node + TypeScript
- [x] Injeção de Dependência
- [x] Testes unitários
- [x] Testes de integração
- [x] Conexão com banco de dados MongDB

****

<br>

- <p>Instalar todas as dependências</p>

``npm install -y``

- <p>Subir o servidor express</p>

``npm run dev``

- <p>Rodar os testes implementados</p>

``npm test``

***

<br>

<strong> Para conectar ao banco de dados é necessário ter as permissões do MongoDB Atlas no arquivo .env</strong>

<br>

<h2>Wip: Rotas implementadas do servidor</h2>
<br>

- <h3>POST /user-form</h3>

<p>Rota POST onde o usuário vai inserir os dados pessoais</p>

```js

    interface IUser {
        nome: string,
        email: string,
        confirmEmail: string,
        cpf: string
    }

```
<br>

- <h3>POST /form-fit</h3>

<p>Rota POST onde o usuário vai inserir os dados relacionados a sua saúde</p>

```js

    interface IFitData{
        peso: number,
        altura: number,
        restricaoAlimentar: string,
        restricaoFisica: string,
        nivel: string
    }

```
<br>

- <h3>GET /all-users</h3>
<p>Retorna JSON com todos os uauário cadastrados no sistema</p>

<br>

- <h3>GET /fit-data</h3>
<p>Retorna JSON com todos os dados FIT dos usuários</p>