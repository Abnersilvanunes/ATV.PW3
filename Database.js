
const Sequelize = require('sequelize');


const connection = new Sequelize(
    'Categoria',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;