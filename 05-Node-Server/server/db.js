// view notes for what each part of this is doing at https://elevenfifty.instructure.com/courses/434/pages/initialize?module_item_id=27049
const Sequelize = require('sequelize');
const sequelize = new Sequelize('workoutlog', 'postgres', 'Letmein1234!', {
    host: 'localhost' ,
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to workoutlog postgres database');
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize; 