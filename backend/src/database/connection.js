const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); /**Criando a coexão com o baco de dados no ambinete development */

module.exports = connection;
