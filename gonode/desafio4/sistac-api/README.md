# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Step by Step

Instal Adonis:

```$ npm i -g @adonisjs/cli ```

create API project with name sistac-api (API de Sistema de Agendamento de Compromissos):

```$ adonis new sistac-api --api-only ```

Run project:

```$ adonis serve --dev ```



## Eslint + editorconfig

* Install eslint global: ```npm install eslint -g```

* Run: ```eslint --init``` use stardard styleguide and generate by CLI command `eslintrc.json`
*  Inside eslintrc.json add a configuration to prop globals: ``` "use": true```

```
 "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "use": true
    },
```


Use is a global functoins, its is not declared, then Eslint shold trown a error.

Editor config
.editorconfig come with default configuratoin when execute adonis new

## Database

Inside of the `config/database.js` there a step-by-step how to configure database.

Choice a database and install the dependecy `npm i --save pg`


Start docker container postgres: ```docker container start ID```

When the database was created and is running, then run this command:

```adonis migration:run ```, for create the tables basics for user and tokens.


