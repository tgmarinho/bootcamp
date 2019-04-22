const express = require("express");

const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  // é possível alterar/adicionar variáveis na requisção.
  req.appName = "Go Node";
  // bloqueia o fluxo mas devolve a resposta ao usuário
  // return res.send(`Bem vindo ao ${req.appName}, ${req.query.name}`);
  // segue o fluxo
  return next();
};

// assim todas as rotas usam o middleware
// app.use(logMiddleware);

// Utilizando o middleware
app.get("/", logMiddleware, (req, res) => {
  return res.send(`Bem vindo ao ${req.appName}, ${req.query.name}`);
});

app.get("/login", (req, res) => {
  console.log("loginnn");
  res.send("loginnn world");
});

// Passando Parametros
app.get("/nome/:name", (req, res) => {
  // console.log(`Bem vindo, ${req.params.name}`); // log do servidor
  // res.send(`Bem vindo, ${req.params.name}`); // mensagem para o cliente como resposta do servidor

  /*
    request: http://localhost:3005/nome/Thiagoo
    response em JSON: 
    {
      "message": "Bem vindo, Thiagoo"
    }
  */
  return res.json({
    message: `Welcome, ${req.params.name}`
  });
});

// Query Params

app.listen(3005);
