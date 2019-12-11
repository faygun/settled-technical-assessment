const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');

router.get('/', (req, res)=>{
    var token = jwt.sign({userName:config.get("username"), password:config.get("password")}, config.get('jwtSecret'), {expiresIn:3600})
    res.status(200).json({token:token});
});

module.exports = router;