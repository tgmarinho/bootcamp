# MarketPlace - Módulo 3 - REST

- Projeto utilizando Node, Express, Rest, MongoDB, Docker e Autenticação JWT

## Docker

- Instalando a imagem do mongodb e redirecionando a porta e rodando em background:

`docker run --name mongonode -p 27017:27017 -d -t mongo`

- Verificar os processos (do bd é database que configuramos acima): `docker ps`

- Restart database: `docker start database`
