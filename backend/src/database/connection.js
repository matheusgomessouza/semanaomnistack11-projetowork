const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config); /**Criando a coexão com o baco de dados no ambinete development */

module.exports = connection;
