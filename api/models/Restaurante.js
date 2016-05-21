/**
 * Restaurante.js
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
      endereco: {
          type: 'string',
      },
      cnpj: {
          type: 'string',
          required: true
      },
      telefone: {
          type: 'string',
      },
      categorias: {
          collection: 'categoria',
          via: 'restaurante'
      },
      seedData: [{
        "nome": "Restaurante Teste",
        "endereco": "Rua de Teste, 300",
        "cnpj": "12345678912",
        "telefone": "99999999",
        "categorias": []
      }]
  }
};

