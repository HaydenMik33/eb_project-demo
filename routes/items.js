const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Item = require('../models/item');

// get item
// router.get('/',(req, res, next) => {
//   console.log(req)
//   res.json({item: req.item});
// });

// add item
router.post('/additem', (req, res, next) => {
    const {description,price} = req.body
  let newitem = new Item ({
    description: description,  
    price: price
  });  
   console.log(req.body)
  Item.additem(newitem, (err) => {
    if(err) {
      res.json({success: false, msg: 'failed'});  
    } else {
      res.status(200).send(newitem)
    }  
  });  
});  



module.exports = router;
