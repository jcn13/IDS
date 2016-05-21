/**
 * Categoria.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nome: {
          type: 'string',
          required: true
      },
      restaurante: {
          model: 'restaurante'
      },
      seedData: [
          {"nome": "Japonês"},
          {"nome": "Italiano"},
          {"nome": "Brasileira"}
          ]
  }
};

