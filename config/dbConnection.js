const Sequelize = require('sequelize');

const sequelize  = new Sequelize('todo_project','root','s12345',{
    host:'localhost',
    dialect:'mysql'

});
sequelize.authenticate().then(()=>{
    console.log("Database Connected");
}).catch(err =>{
    console.log("Error" + err);
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/users')