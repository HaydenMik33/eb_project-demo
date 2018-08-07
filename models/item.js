const mongoose = require("mongoose");
const config = require("../config/database");
const {Schema} = mongoose;

const ItemSchema = new Schema({
  description: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    required: true
  }
});

const Item = module.exports = mongoose.model("Item", ItemSchema)

// module.exports.getItemsBy= (id, callback) => {
//     Item.findById(id, callback);
// };
// module.exports.getUserByUsername = (username, cb) => {

// };
module.exports.additem = function(newitem, callback){
      newitem.save(callback)
}
