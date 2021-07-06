const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/bookdata');
function router(nav){
// var books = [
//     {
//         title:'Tom and Jerry',
//         author:'Joseph Barbera',
//         genre:'Cartoon',
//         img:'tom and jerry.jpg'
//     },
//     {
//         title:'Harry Potter',
//         author:'J K Rowling',
//         genre:'Fantacy',
//         img:'harry potter.jpg'
//     },
//     {
//         title:'Paathummayude Aadu',
//         author:'V M Basheer',
//         genre:'Drama',
//         img:'paathummayude aadu.jpg'
//     },
// ]

booksRouter.get('/', function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render("books",
        {
            nav,
            title:'Library',
            books
    
        });

    })
  
});

booksRouter.get('/:id', function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id: id})
    .then(function(book){
        res.render('book',
        {
            nav,
            title:'Library',
            book
    
        });
    })
  
});
booksRouter.get('/addBook', function(req,res){
    res.render('addBook',
    {
        nav,
        title:'Library'
    

    });
});

    booksRouter.get('/update/:id', function(req,res){
        res.render('update',
        {
            nav,
            title:'Library'
        
    
        });
    });

    booksRouter.get('/remove/:id',(req,res)=>{
   
        const id = req.params.id;
        Bookdata.findByIdAndDelete({_id: id})
        .then(function(books){
            res.render('books',
            {
                nav,
                title:'Library',
                books
        
            });
        });
      });
        

        
    // booksRouter.get('/delete/:id', function(req,res){
    //     res.render('update',
    //     {
    //         nav,
    //         title:'Library'
        
    
    //     });
// });

return booksRouter;
}

module.exports = router;