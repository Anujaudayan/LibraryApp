
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/library", {useNewUrlParser:true});
mongoose.connection 
.once("open",() => console.log("Connected"))
.on("error",error => {
    console.log("Your Error", error);
});

const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    name : String,
    about : String,
    image : String
});
var Authordata = mongoose.model("authordata", AuthorSchema);
module.exports = Authordata;
