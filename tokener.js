const config = require('config');
const jwt = require('jsonwebtoken');

var token = jwt.sign({userName:config.get("username"), password:config.get("password")}, config.get('jwtSecret'), {expiresIn:3600})

console.log(token);