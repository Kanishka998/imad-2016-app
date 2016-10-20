// counter code
var button = document.getElementById('counter');
button.onclick = function() {
  
  // make request to counter endpoint 
  
  var Request = new XMLHttpRequest();
  
  // capture the request and store it in the variables
  Request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE)  {
          // Then take some action
          if (Request.status === 200){
              
             var counter =  request.responseText;                    // get access to value responded by request
          }
          
      }    
      
      
  };
  
  
  
    
};