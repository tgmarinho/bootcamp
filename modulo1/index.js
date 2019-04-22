const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

// views lugar onde estão os arquivos nunjucks
nunjucks.configure("views", {
  autoescape: true, // manipular os parametros automaticamente
  express: app, // variável do  servidor express
  watch: true // permite hotdeploy quando altera alguma coisa na view (igual ao nodemon)
});

// para definir globalmente a extensão dos arquivos do nunjucks
app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("list", { name: "Thiago Marinho" });
});

app.listen(3005);
