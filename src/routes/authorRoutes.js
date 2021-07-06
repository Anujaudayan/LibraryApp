const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/authordata');
function router1(nav){
// var authors = [
//     {
//         name:'Joseph Barbera',
//         img:'josephbarbera.jpg',
//         about:'Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century. He was born to Italian immigrants in New York City, where he lived, attended college and began his career through his young adult years. After working odd jobs and as a banker, Barbera joined Van Beuren Studios in 1927 and subsequently Terrytoons in 1929. In 1930, he moved to California and while working at Metro-Goldwyn-Mayer (MGM), Barbera met William Hanna. The two men began a collaboration that was at first best known for producing Tom and Jerry. In 1957, after MGM dissolved their animation department, they co-founded Hanna-Barbera, which became the most successful television animation studio in the business, producing programs such as The Flintstones, Yogi Bear, Scooby-Doo, Top Cat, The Smurfs, Huckleberry Hound, and The Jetsons.'
//     },
//     {
//         name:'J K Rowling',
//         img:'rowling.jpg',
//         about:'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL , better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith.'

//     },
//     {
//         name:'V M Basheer',
//         img:'basheer.jpg',
//         about:'Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), also known as Beypore Sulthan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. His notable works include Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu,'
//     },
// ]

authorsRouter.get('/', function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
    
        });

    })
  
});

authorsRouter.get('/:id', function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id: id})
    .then(function(author){
        res.render('author',
        {
            nav,
            title:'Library',
            author
    
        });
    });
  
});
authorsRouter.get('/addAuthor', function(req,res){
    res.render('addAuthor',
    {
        nav,
        title:'Library'
    

    });
});
authorsRouter.get('/updateauth/:id', function(req,res){
    res.render('updateauth',
    {
        nav,
        title:'Library'
    

    });
});


return authorsRouter;
}

module.exports = router1;