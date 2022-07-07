let submit = document.querySelector('#submit');
let h2 = document.querySelector('#principal');
let img = document.querySelector("img")
let marcar = document.querySelector('.sex')



function teste(n) {
    if (n >= 18 && n <= 25) {
       
    }
    if (n > 25 && n <= 35) {
        console.log("b");
    }
    if (n > 35 && n <= 45) {
        console.log("c");
    }
    if( n > 45 && n <= 60){

    }
    if(n > 60 && n <=70){

    }
    if( n > 70){

    }
    return n;

}


let imagens = {
    "18yearsFEM": () =>  img.src = "./images/girl18.jpg",
    "18yearsMASC": () => img.src = "./images/girl18.jpg",
}





function testando(e){
   imagens[e.target.id]()
}





submit.addEventListener('click', function () {
    var a = teste(parseInt(document.querySelector('#numero').value));
})


marcar.addEventListener("click", testando)




