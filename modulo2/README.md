# Go Barber

- Projeto utilizando Node, Express, Nunjucks, Sequelize, Postgres e Docker

## Docker

- Instalando a imagem do postgress e redirecionando a porta e rodando em background:

`docker run --name database -p 5432:5432 -d -t kartoza/postgis`

- Verificar os processos (do bd é database que configuramos acima): `docker ps`

- Restart database: `docker start database`

## Migrations

### Criei as migrations com o comando:
- users: `npx sequelize migration:create --name=create-users`
- appointments: `npx sequelize migration:create --name=create-appointments`

### Quando criar um arquivo de migração, executar o comando
- Para migrar:
`px sequelize db:migrate`

### Quando quiser desfazer uma migração
- Para desfazer:
`px sequelize db:migrate:undo`
