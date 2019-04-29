# MarketPlace - Módulo 3 - REST

- Projeto utilizando Node, Express, Rest, MongoDB, Docker e Autenticação JWT

## Docker

- Instalando a imagem do mongodb e redirecionando a porta e rodando em background:

`docker run --name mongonode -p 27017:27017 -d -t mongo`

- Instalando a imagem do redis e redirecionando a porta e rodando em background:

`docker run --name noderedis -p 6379:6379 -d -t redis:alpine`

- Verificar os processos: `docker ps`

- Restart MongoDB, Redis: `docker start mongonode noderedis mongoclient/mongoclient`
- Run MongoClient: `docker run -d -p 3000:3000 mongoclient/mongoclient`

- Consultas:

`docker exec -it mongonode \
    mongo --host localhost`

`show dbs`
`use gonode03`
`db.user.find()`
`db.ad.find()`


## Teste de Email

- Serviço para teste de mail fake: [Mailtrap.IO](https://mailtrap.io/)

## Sentry

- Serviço para envios de erros em produção para o [Sentry](http://sentry.io), com mensagens mais claras de erros e com melhor UI. Com alerta para o email do desenvolvedor
