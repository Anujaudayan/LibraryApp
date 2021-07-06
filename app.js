const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/addAuthor',name:'add Author'
    },
    
    {
        link:'/login',name:'Login'
    },
   
    {
        link:'/signup',name:'SignUp'
    }
];
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav);
const Userdata = require('../libapp/src/model/userdata');

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/addAuthor',addAuthorRouter);

app.get('/', function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'

    });
});
app.get('/login', function(req,res){
    res.render("login",
    {
        nav,
        title:'Library'

    });
});
app.get('/signup', function(req,res){
    res.render("signup",
    {
        nav,
        title:'Library'

    });
});

app.get('/signup/signup', function(req,res){
    var item1 ={
    firstname: req.query.firstname,
    lastname: req.query.lastname,
    phoneno: req.query.phoneno,
    email: req.query.email,
    password : req.query.password
    };
   var user = Userdata(item1);
   user.save();
   res.redirect('/login');   
});


app.get('/login/login', function(req,res){

        
        var Email = "admin@gmail.com";
        var Password = "Admin@123";
        
    
    const email = req.query.email;
    const password = req.query.password;
    Userdata.findOne({email: email})
    .then(function(user){
        if(email.value== Email && password.value==Password)
        {
            res.render("signup",
            {
                nav,
                title:'Library',
            
        
            });
        }
        else(user.email==email.value && user.password== password.value)
        {
            res.render("user",
            {
                nav,
                title:'Library',
            
        
            });
        }
        if(user.email!= email.value || user.password!= password.value)
        {
           
         res.redirect('/login'); 
         }
         else{
            res.redirect('/login');  
         }
        
    
        
    })
  
});



app.listen(port, ()=>{console.log("Server Ready at "+port)});