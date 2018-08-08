const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Order = require('../models/order')
router.get('/:userId',(req, res, next) => {
    const {userId} = req.params;
    Order.getOrdersByUser({user:userId},(err,orders)=>{
        if(err) {
            res.json({success: false, msg: 'failed'});  
          } else {
            res.status(200).send(orders)
          }  
    })
});

router.post('/',(req, res) => {
    console.log(req.body);
    const {total , user , items } = req.body;
    let newOrder = new Order({
        total: total,
        user : user,
        items: items
    })
    Order.addNewOrder(newOrder,(err)=>{
        if(err) {
            res.json({success: false, msg: 'failed'});  
          } else {
            res.status(200).send(newOrder)
          }  
    })
});


module.exports = router;
