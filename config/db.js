const Sequelize = require("sequelize")

const sq = new Sequelize("Sarvin-shop-db", "postgres","Kaveh1234",{
  host: "localhost",
  dialect: "postgres"
})
sq.authenticate().then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

module.exports = sq