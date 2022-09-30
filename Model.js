const Sequelize = require('sequelize');

/* IMPORT DA CONEXÃO */
const connection = require('./Database');

/*
CRIAÇÃO DO MODELO DA TABELA CATEGORIA
MÉTODO: define
PARAMETROS:
1 - NOME DA TABELA - STRING
2 - JSON: REPRESENTA O CAMPO OU CAMPOS DA TABELA, SEUS TIPOS E SUAS  REGRAS.
*/
const Categoria = connection.define(
    'Categoria',
    {
        nome_categoria:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        tipos_jogo:{
            type: Sequelize.STRING(100),
            allowNull: false
    },
    Classificacao:{
        type: Sequelize.STRING(100),
        allowNull: false },
      
       Estilo_jogo:{
            type: Sequelize.STRING(100),
            allowNull: false },
}

);

//Categoria.sync({force:true});

module.exports = Categoria;