var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var content = {
    title:'Article one Kanishka Soni'.
    heading: 'Article-one'.
    date: 'sept 22 2016'.
    content:'<p>.Article one written well.Article one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written wellArticle one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written well.Article one written well</p>'
    'kskkdskskdfksdf'
};
var htmlTemplate = 
'
{<html>
    
    <head>
        
        <title>
            
            Article-one - Kanishka Soni
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
        <style>

            }
        </style>
    </head>
    <body>
        <div class = "container">
                <div>
                    <o href = "/">Home</o>
                </div>
                <hr/>
                <h3>
                    Article-One
                </h3>
                <div>
                    September 21, 2016
                </div>
                <div>
                    <p>
                        .Article one written well.Article one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written wellArticle one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written well.Article one written well
                    </p>
                </div>
        </div>
    </body>
</html>}
';

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
