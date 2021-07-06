const express = require('express');
const Authordata = require('../model/authordata');
const adminRouter = express.Router();
const Bookdata = require('../model/bookdata');


function router3(nav){


adminRouter.get('/', function(req,res){
    res.render('addBook',
    {
        nav,
        title:'Library'
    

    });

   
});
adminRouter.get('/update/:id', function(req,res){
    const id = req.params.id;
    res.render('update',
    {
        nav,
        title:'Library'
    

    });
});


adminRouter.get('/add', function(req,res){
           var item ={
           title: req.query.title,
           author: req.query.author,
           genre: req.query.genre,
           image: req.query.image
           };
          var book = Bookdata(item);
          book.save();
          res.redirect('/books');   
    });

    adminRouter.get('/add1', function(req,res){
        var item ={
        name: req.query.name,
        about: req.query.about,
        image: req.query.image
        };
       var author = Authordata(item);
       author.save();
       res.redirect('/authors');   
 });

//     adminRouter.get('/update/:id', function(req,res){
//         const id = req.params.id;
//         Bookdata.findById({_id: id})
//         .then(function(book){
//         var item ={
//         title: req.query.title,
//         author: req.query.author,
//         genre: req.query.genre,
//         image: req.query.image
//         };
//        var book = Bookdata(item);
//        book.save();
//        res.redirect('/books');   
//  });
// });
// adminRouter.get('/update/:id', (req,res) => {
//     Bookdata.findById(req.params._id, (err, doc) => {
//         if(!err){
//             res.render("books/update", {
//                 var item1 ={
//                     title: req.query.title,
//                     author: req.query.author,
//                     genre: req.query.genre,
//                     image: req.query.image
//                     }
//                    var book = Bookdata(item1);
//                    book.save();
//                    res.redirect('/books');   
//              });
//         }
//     });
// });

//  adminRouter.get('/delete/:id', function(req,res){
//     const id = req.params.id;
//     Bookdata.findByIdAndDelete({_id: id})
//     .then(function(book){
//     var item ={
//     title: req.query.title,
//     author: req.query.author,
//     genre: req.query.genre,
//     image: req.query.image
//     };
//    var book = Bookdata(item);
//    book.save();
//    res.redirect('/books');   
// });

return adminRouter;
}

module.exports = router3;