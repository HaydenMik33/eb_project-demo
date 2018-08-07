const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Order = require('../models/order')
router.get('/',(req, res, next) => {
    console.log(req)
    Order.getOrdersByUser(req.userId,(err,orders)=>{
        if(err) {
            res.json({success: false, msg: 'failed'});  
          } else {
            res.status(200).send(orders)
          }  
    })
});


module.exports = router;
