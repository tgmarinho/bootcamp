# Modulo 1

## Ambiente e Conceitos

### Introdução e arquitetura

#### AMBIENTE E CONCEITOS

- Motor V8 é usado no NodeJS, MotorV8 era usado apenas no front-end.
- Google Chrome criou a engine V8 que é responsovel por ler JS e interpretar.
- NodeJS pegou o código e colocou no backend, assim qualquer código Javascript é entendido no front quanto no backend.

#### Diferenças de PHP/Ruby

- No NodeJS tem um recurso non-block IO. 
- Recebe requisição, processa e devolve para o cliente, porém sem um sequencia, pois tem o EventLoop acontecendo em tempo real. 
- No mesmo tempo que está recebendo uma nova requisição, pode estar respondendo a outra requisição. De forma multithread no processador.
- Isso dá flexibidade e performance.


### Install Node, npm e yarn
- node -v
- npm -v
- yarn -v

Se estiver tudo ok! Bora pra frente!


### Criando servidor HTTP
- usando módulo http para criar um servidor e ouvir na porta 3005
- Agora já podemos ouvir na porta 3005 e ouvir as requisições http

### Instalação do Express
- ` yarn add express `
- Agora podemos criar um servidor mais robusto para gerenciar rotas e diminuir a quantidade e complexidade do código cliente (código que de fato entrega resultado, ao invés de escrever tudo na mão - reinventar a roda)
- configurando rotas no app
- requisição GET na raiz, rota login e rota nome
- recebendo parametros e queries

### Instalação do Nodemon
- `yarn add nodemon -D`
- lib que faz hotdeploy ou autoreload da aplicação
- precisa criar um script no package json, o nome pode ser qualquer um
- rodar com `yarn start`

