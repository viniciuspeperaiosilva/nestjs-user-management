

Este projeto é uma aplicação construída com nestjs para gerenciamento de usuários. Permitindo o cadastro de novos usuários, a autenticação via JWT e a segurança de dados através da criptografia de senhas.

Antes de rodar o projeto, você precisa ter instalado:

- Node.js (v14 ou superior)
- PostgreSQL (ou acesso a um banco de dados PostgreSQL)
- NestJS CLI (se não tiver, pode instalar com `npm install -g @nestjs/cli`)

Instalação

Passo 1: Clone o repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/viniciuspeperaiosilva/nestjs-user-management
cd nestjs-user-management

Passo 2: Instalando as dependências
No diretório do projeto, execute o comando para instalar as dependências:

npm install

Passo 3: Configure o Banco de Dados
Crie um banco de dados PostgreSQL.
Configure a conexão com o banco de dados no arquivo app.module.ts, colocando o nome do seu banco, sua senha e etc.

Passo 4: Rodando a Aplicação
Execute o seguinte comando para iniciar o servidor:

npm run start




~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




1. Cadastro de Usuário
URL: POST /users
Payload:
{
  "name": "Nome do Usuário",
  "email": "email@dominio.com",
  "password": "senha"
}
Resposta:
201: Usuário criado com sucesso.
400: Caso haja erro no envio dos dados.


Autenticação (Login)
URL: POST /auth/login
Payload:
{
  "email": "email@dominio.com",
  "password": "senhaSegura"
}
Resposta:
200: Retorna um JWT (token de autenticação).
401: Caso as credenciais estejam incorretas.



