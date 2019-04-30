# Desafio 1
## Configure uma aplicação utilizando ExpressJS, Nunjucks, EditorConfig e ESLint.

## Rotas
- / Rota inicial que renderiza uma página com um formulário com um único campo age
que representa a idade do usuário;
- /check : Rota chamada pelo formulário da página inicial via método POST que checa se a
idade do usuário é maior que 18 e o redireciona para a rota /major , caso contrário o
redireciona para a rota /minor (Lembre de enviar a idade como Query Param no
redirecionamento);
- /major : Rota que renderiza uma página com o texto: Você é maior de idade e
possui x anos , onde x deve ser o valor informado no input do formulário;
- /minor : Rota que renderiza uma página com o texto: Você é menor de idade e
possui x anos , onde x deve ser o valor informado no input do formulário;

## Middlewares
- Deve haver um middleware que é chamado nas rotas /major e /minor e checa se a
informação de idade não está presente nos Query Params. Se essa informação não existir deve
redirecionar o usuário para a página inicial com o formulário, caso contrário o middleware deve
apenas continuar com o fluxo normal.

## Entrega
- Esse desafio não precisa ser entregue e não receberá correção, mas você pode ver o
resultado do código do desafio feito por mim aqui: https://github.com/Rocketseat/bootcamp-n
odejs-desafio-01


#### “Sua única limitação é você mesmo”!
