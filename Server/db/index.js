var Sequelize = require('sequelize');
var db = new Sequelize('tracker', 'root', 'Me1.', {host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000}}
  );


db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// we define the models we need using js--we don't need a schema file!
var expenses = db.define('expenses', {
  category: Sequelize.STRING,
  month:Sequelize.STRING,
  amount:Sequelize.INTEGER,

});



expenses.sync({force: true});
// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing expenses tables and make new ones.

exports.expenses = expenses;

/////////////Me1.


