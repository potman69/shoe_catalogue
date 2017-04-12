var shoes = [];

if (localStorage.getItem('shoes')){
    shoes = JSON.parse(localStorage.getItem('shoes'));
    
}

var source = document.getElementById('shoeTemplate').innerHTML;
var template = Handlebars.compile(source);

   var shoeObjects = {
    shoeHandler: shoes    
}        
   
   

function addStock(){
    var pushArray = shoes.push({color : document.getElementById('color').value,
                                price : document.getElementById('price').value,
                                size : document.getElementById('size').value,
                                stock : document.getElementById('stock').value                               
                               });
    localStorage.setItem('shoes',JSON.stringify(shoes));
    storedshoes = JSON.parse(localStorage.getItem('shoes'));
    document.getElementById('color').value = "";
    document.getElementById('price').value = "";
    document.getElementById('size').value = "";
    document.getElementById('stock').value = "";
    
};



function myFunction(){
    
    var colors = document.querySelector('#searchs').value;
    
   var newList = [];    
     for (var i = 0; i<shoeObjects.shoeHandler.length; i++){
        var currentObj = shoeObjects.shoeHandler[i];
         if (colors === currentObj.color ){
             newList.push(currentObj);   
             
             
         }
         
     }
     var data = {shoeHandler: newList};
     document.getElementById('display').innerHTML = template(data);     
    document.getElementById('searchs').value = "";
}
function displayStockFunction(){
     document.getElementById('display').innerHTML = template(shoeObjects); 
}

function sizeFunction(){
      var sizeShoes = document.querySelector('#sizeShoe').value;
    
   var newList = [];    
     for (var i = 0; i<shoeObjects.shoeHandler.length; i++){
        var currentObj = shoeObjects.shoeHandler[i];
         if (sizeShoes === currentObj.size ){
             newList.push(currentObj);   
             
             
         }
         
     }
     var data = {shoeHandler: newList};
     document.getElementById('display').innerHTML = template(data);     
    document.getElementById('sizeShoe').value = "";
}


function displayStockFunction(){
     document.getElementById('display').innerHTML = template(shoeObjects); 
    
    
}




