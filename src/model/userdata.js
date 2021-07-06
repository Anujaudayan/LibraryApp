const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/library", {useNewUrlParser:true});
mongoose.connection 
.once("open",() => console.log("Connected"))
.on("error",error => {
    console.log("Your Error", error);
});

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstname : String,
    lastname : String,
    phoneno : Number,
    email : String,
    password : String
});
var Userdata = mongoose.model("userdata", UserSchema);
module.exports = Userdata;