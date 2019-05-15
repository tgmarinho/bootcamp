# Go Barber - Desafio 2

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


# Desafio 2

Nesse segundo desafio você deve melhorar a aplicação que criamos até agora, o GoBarber.

Até agora criamos a parte do usuário poder agendar um serviço com o prestador, e também
vetamos que serviços sejam marcados no mesmo horário, ou em horários que já passaram.

A partir de agora você deve implementar o seguinte:
Crie uma seção para o prestador de serviços acompanhar os agendamentos do dia
programados com ele. Essa seção deve incluir as informações do usuário que agendou e
também o horário do agendamento.

## Entrega
Esse desafio não precisa ser entregue e não receberá correção, mas você pode ver o
resultado do código do desafio feito por mim aqui: https://github.com/Rocketseat/bootcamp-n
odejs-desafio-02

PS.: Tente fazer o desafio sem olhar o código antes :)

PS2.: Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar

seus conhecimentos para oportunidades futuras :D

Booooooora dev!!!

“Não espere para plantar, apenas tenha paciência para colher”!
