// counter code
var button = document.getElementById('counter');
button.onclick = function() 
    {
  
                    // make request to counter endpoint 
          
          var request = new XMLHttpRequest();
          
          // Create a request Object
          request.onreadystatechange = function()
          {
              if(request.readyState===XMLHttpRequest.DONE)
              {
                  // Then take some action
                  if (request.status === 200)
                  {  
                     var counter =  request.responseText;                    // get access to value responded by request
                     var span = document.getElementById('count');
                     span.innerHTML = counter.toString();
                  }
              }    
          };
          
                    // make the request
          request.open('GET','http://kanishka998.imad.hasura-app.io/counter',true);
          request.send(null);
    };
    
    
    // code for Submit name
    var submit = document.getElementById('submit_btn');
    submit.onclick = function()
    {
        var request = new XMLHttpRequest();
          
          // Create a request Object
          request.onreadystatechange = function()
          {
              if(request.readyState===XMLHttpRequest.DONE)
              {
                  // Then take some action
                  if (request.status === 200)
                  { 
                         var names = request.responeText;
                         names = JSON.parse(names);    //converts into array again
                        var list = '';
                        for (var i = 0; names.length;i++)
                        {
                            list+= '<li>' + names(i) + '</li>';
                        }
                        var ul = document.getElementById('namelist');
                        ul.innerHTML = list;
                      
                  }
              }    
          };
          
                    // make the request
                     var nameinput = document.getElementById('name');
                     var name = nameinput.value;
          request.open('GET','http://kanishka998.imad.hasura-app.io/submit-name?name='+ name,true);
          request.send(null);
        // we have to make request 
        
        
    };