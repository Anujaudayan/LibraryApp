
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/library", {useNewUrlParser:true});
mongoose.connection 
.once("open",() => console.log("Connected"))
.on("error",error => {
    console.log("Your Error", error);
});

const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});
var Bookdata = mongoose.model("bookdata", BookSchema);
module.exports = Bookdata;

