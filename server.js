var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    article-one: {
        title: 'Article one Kanishka Soni',
        heading:'Article-one',
        date: 'sept 2 2016',
        content:`<p>.Article one written well.Article one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written wellArticle one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written well.Article one written well</p>`
    },
    article-two:{
         title: 'Article one Kanishka Soni',
        heading:'Article-one',
        date: 'sept 220 2016',
        content:`<p>.Article one written well.Article one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written wellArticle one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written well.Article one written well</p>`
    },
    article-three:{
         title: 'Article one Kanishka Soni',
        heading:'Article-one',
        date: 'sept 202016',
        content:`<p>.Article one written well.Article one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written wellArticle one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written wellArticle one written well.Article one written well.Article one written wellArticle one written well.Article one written well.Article one written well.Article one written well.Article one written well.Article one written well</p>`
    }
};
function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    
    
    var htmlTemplate = `
    
    <html>
        
        <head>
            
            <title>
                
                ${title}
            </title>
             <link href="/ui/style.css" rel="stylesheet" />
            
        </head>
        <body>
            <div class = "container">
                   <div>
                        <a href = "/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                       ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
            </div>
        </body>
    </html>
    
    `;
    return htmlTemplate
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename', function (req,res){
    //feature of express files fetches file name
    res.send(createTemplate(articleOne));
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
