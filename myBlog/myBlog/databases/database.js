const Sequelize = require('sequelize');
import {DBNAME, USERNAME, PASSWORD, DBPORT, HOST} from '../configs/config';
export const sequelize = new Sequelize(DBNAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
      ssl: true
  }
});
sequelize
  .authenticate()
  .then(() => {
    console.log(`Connection has been established successfully. PORT: ${DBPORT}.`);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  export const Op = Sequelize.Op;
