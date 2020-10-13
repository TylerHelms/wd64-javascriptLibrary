var express = require('express');
var router = express.Router();
var sequelize = require('../db');

/* Controller Method #1 */

router.post('/one', function(req, res){
    res.send("Test 1 went through!")
}); 

module.exports = router;