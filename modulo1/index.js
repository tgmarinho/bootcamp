const express = require("express");

const app = express();

// http://localhost:3005/?name=Thiagoo consigo pegar o parametro passado na URL
app.get("/", (req, res) => {
  console.log(`Bem vindo, ${req.query.name}`);
  res.send(`Bem vindo, ${req.query.name}`);
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
