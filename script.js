let submit = document.getElementById("submit");
let masc = document.getElementById("masc");
let fem = document.getElementById("fem")
let img = document.getElementsByTagName("img")[0]
let div = document.getElementsByTagName("div")[0]

console.log(div)

function action() {

    let nasc = parseInt(document.getElementById("numero").value);
    let h2 = document.getElementsByTagName("h2")[0]
    let data = new Date().getFullYear();
    let idade = data - nasc
    div.style = "height:430px"

    if (masc.checked) {
        h2.innerText = `Detectamos homem com ${idade} anos`
        img.src = "./images/h.jpg"
        
        
    } 
    else if (fem.checked) {
        h2.innerText = `Detectamos mulher com  ${idade}  anos`
        img.src = "./images/m.jpg"
        
        
    }  
}












submit.addEventListener("click", action);