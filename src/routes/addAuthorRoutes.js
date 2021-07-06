const express = require('express');
const addAuthorRouter = express.Router();
function router2(nav){


addAuthorRouter.get('/', function(req,res){
    res.render('addAuthor',
    {
        nav,
        title:'Library'
    

    });
});

return addAuthorRouter;
}

module.exports = router2;