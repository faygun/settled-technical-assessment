const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{
    res.status(200).json({result:"OK!"});
});


module.exports = router;