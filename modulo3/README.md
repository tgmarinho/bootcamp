# MarketPlace - Módulo 3 - REST

- Projeto utilizando Node, Express, Rest, MongoDB e Docker

## Docker

- Instalando a imagem do postgress e redirecionando a porta e rodando em background:

`docker run --name database -p 5432:5432 -d -t kartoza/postgis`

- Verificar os processos (do bd é database que configuramos acima): `docker ps`

- Restart database: `docker start database`
