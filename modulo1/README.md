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

- `yarn add express`
- Agora podemos criar um servidor mais robusto para gerenciar rotas e diminuir a quantidade e complexidade do código cliente (código que de fato entrega resultado, ao invés de escrever tudo na mão - reinventar a roda)
- configurando rotas no app
- requisição GET na raiz, rota login e rota nome
- recebendo parametros e queries

### Instalação do Nodemon

- `yarn add nodemon -D`
- lib que faz hotdeploy ou autoreload da aplicação
- precisa criar um script no package json, o nome pode ser qualquer um
- rodar com `yarn start`

### Fluxo de Requisições

- middleware -> Interceptador
- Intercepta uma requisição e faz alguma coisa
- Middleare de log
- Middleware por ser interceptador, ele pode bloquear o fluxo da requisição no express, ou não, basta configurar com next, passando como parametro, depois do req, res e chamando com return next().

  ````const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
    return next();
  }; ```
  ````

- assim todas as rotas usam o middleware: app.use(logMiddleware); // passa como parametro o middleware
- o next() faz com que a requisição não seja bloqueada no middleware, ele faz o que tem q ser feito e deixa seguir o fluxo da requisição e dar a resposta para o cliente se for o caso.
- com o middleware é possível modificar e adicionar variáveis da requisição:

```
const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  // é possível alterar/adicionar variáveis na requisção.
  req.appName = "Go Node";

  return next();
};
```

- é possivel adicionar e modificar na interceptação os itens da requisição que estào na variável req, e quem estiver acessando o middleware pode ter acesso as essas informações.

- se quiser que o middleare interrompa o processamento do node, retira o next e devolve uma resposta para o cliente com res.send("alguma coisa"); mas dentro do middleware
- Pode passar quantos middlware quiser como parametros, ex:

```// Utilizando o middlewaresssss
app.get("/", logMiddleware, logMiddleware, logMiddleware, logMiddleware (req, res) => {
  return res.send(`Bem vindo ao ${req.appName}, ${req.query.name}`);
});
```

### QUIZ - Resumo

#### Sobre o NODE:

- O NodeJS é uma plataforma que utiliza o motor V8 do Google Chrome para entender Javascript no lado do back-end;
- A arquitetura Non-blocking I/O do NodeJS permite trabalharmos com múltiplos cores do processador da máquina para trabalhar com ações em paralelo;
- Utilizamos o npm ou o yarn para instalar as dependências da nossa aplicação que ficam armazenadas na pasta node_modules e registradas no arquivo package.json;

#### Sobre o EXPRESSJS:

- O ExpressJS é um mini-framework capaz de lidar com rotas e views;

#### Sobre o middlewares:

- O middleware é um interceptador que pode, ou não, bloquear o fluxo da requisição;

#### Sobre o EXPRESSJS:

- Utilizamos o app.get para definir uma rota com o método GET;
- Utilizamos o app.use para declarar middlewares que serão chamados em todas rotas;
- O middleware geralmente é reconhecido por utilizar uma função que recebe os parâmetros (req, res)

### Configurando Nunjuncks

- um rico e poderoso linguagem de template para javascript

### Renderizando dados na View

- criamos um array e passamos para o list.njk como parametro do res.render()
- criamos um novo template /new e sua respectiva rota
- criamos um link de dentro da listagem de usuários para a rota /new

### Enviando formulário

- utilizando método POST para salvar usuários
- criamos a rota /create com método post para receber os dados sem aparecer na barra de endereço
- configuramos o express para saber lidar como info de formulário html e receber os dados do req.body
- recebemos do req.body do parametro 'name' utilizado no input do nome do usuário
- salvamos o novo usuário em memória
- fizemos o redirect após salvar o novo usuário para a listagem de usuários
- não seria possível fazer com php/ruby pq o array não ficaria armazenado na memória \*

### Quiz - Nunjucks

- O Nunjucks é uma template engine para retornarmos HTML contendo variáveis, condicionais e estruturas de repetição;
- Para renderizarmos uma view passando variáveis utilizamos a sintaxe: return res.render('list', { users });
- Para criarmos um laço de repetição com o for no Nunjucks declaramos: {% for user in users %} e fechamos com {% endfor %};
- Para utilizarmos uma variável no Nunjucks utilizamos a sintaxe {{ variavel }};

### Debugando aplicação

- configurando o vscode para debugar a aplicação

### Configurando EditorConfig

- instalar extensão no vscode
- criar o arquivo .editorconfig e passar as configurações desejadas
