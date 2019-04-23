# Go Barber

- Projeto utilizando Node, Express, Nunjucks, Sequelize, Postgres e Docker

### Docker

### Instalando a imagem do postgress e redirecionando a porta e rodando em backgroud
`docker run --name database -p 5432:5432 -d -t kartoza/postgis`

Verificar os processos (do bd é database que configuramos acima)
`docker ps`

### Migrations

- Para migrar
`px sequelize db:migrate`

- Para desfazer
`px sequelize db:migrate:undo`
