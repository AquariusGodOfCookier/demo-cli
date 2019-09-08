const express = require('express');
const router = express.Router();
router.get('/demo/table', (req, res) => {
    res.send('this is demo table')
})
router.get('/demo/test',(req,res)=>{
    res.send('this is demo test get')
})
module.exports = router;