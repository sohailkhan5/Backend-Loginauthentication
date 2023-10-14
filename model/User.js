const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  surename:String,
  email:String,
  password:String
});

const Usermodel = mongoose.model("register",UserSchema)
module.exports = Usermodel
