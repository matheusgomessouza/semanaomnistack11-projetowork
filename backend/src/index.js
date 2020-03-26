const express = require('express');
const cors = require('cors');
const routes = require('./routes'); /**IMPORTANDO AS ROTAS "./routes" */

const app = express(); /**Framework para lidar com rotas dentro da aplicação */

app.use(cors()); /**Módulo de segurança */
app.use(express.json()); /**Informar que estaremso utilizando o formato JSON para o corpo das requisições*/
app.use(routes);

app.listen(3333);

/**
 * Rota: endereço URl completo
 * Recurso: Ou caminho "/users"
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados e enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Tipos de Banco de Dados (Relacionais e Não-Relacionais)
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */
   /** Como instalar o banco de dados:
    * Driver: SELECTED * FROM users
    * Utiliazando JavasCript => Query Builder(KNEX): table('users').selected('*').where()
    */