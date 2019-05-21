# TESTES UNITÁRIOS

# Passos

* Instalei as dependencias e criei a estruta do projeto 
* Rodei o comando `yarn sequelize init` para gerar os arquivos de configuração do sequelize e coloquei nas pastas corretas.
* Criando a migration: `yarn sequelize migration:create --name=create-users`
* Rodar o banco conforme as configurações de dentro do config/database.js (.env)

Criando o banco de dados via docker

```
 docker run \
    --name postgres-node-tdd \
    -e POSTGRES_PASSWORD=docker \
    -e POSTGRES_USER=docker \
    -e POSTGRES_DB=nodetdd \
    -p 5432:5432 \
    -d \
    postgres
```

Depois para ligar o serviço
```docker container start postgres-node-tdd```


* Executar a migration: `yarn sequelize db:migrate `
  