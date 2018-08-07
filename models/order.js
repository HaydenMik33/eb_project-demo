const mongoose = require("mongoose");
const config = require("../config/database");
const {Schema} = mongoose;
const OrderSchema =new Schema({
  total: {
    type: Number,
    required: true
  },
  user : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  items: {
    type: [Schema.Types.ObjectId],
    ref:'Item'
  }
});

const Order = module.exports = mongoose.model("Order", OrderSchema)

module.exports.getOrdersByUser = (userId,callback) => {
    Order.find(userId,callback)
};
// module.exports.getUserByUsername = (username, cb) => {

// };
// module.exports.addUser = function(newUser, callback){

// }
