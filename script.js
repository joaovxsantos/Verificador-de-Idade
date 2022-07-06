var b = document.querySelector('#submit');
var c = document.querySelector('#principal')


b.addEventListener('click', function(){
    var a = parseInt(document.querySelector('#numero').value);
    if( a >= 18 &&  a <= 25 ){
        console.log("a")
    }
    if( a > 25 && a <= 35){
        console.log("b")
    }
    if( a > 35 && a <=45){
        console.log("c")
    }
    

    
})




