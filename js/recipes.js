var masala = document.getElementById('chicken-masala');
var lasagna = document.getElementById('lasagna');
var pizza = document.getElementById('pizza');
var moussaka = document.getElementById('moussaka');
var bowl = document.getElementById('quinoa-bowl');
var thai = document.getElementById('thai');
var salmon = document.getElementById('salmon');
var curry = document.getElementById('thai-green-curry');
var burger = document.getElementById('burger');
var tacos = document.getElementById('tacos');
var arr = [
    masala, lasagna, pizza, moussaka, bowl, thai, salmon, curry, burger, tacos
] 
    var randomIndex = Math.floor(Math.random()*arr.length)
    arr[randomIndex].style.display="block";

    var button = document.getElementById('button')
    button.addEventListener("click",function(){
        arr[randomIndex].style.display = index === randomIndex ? "block" : "none";
}
)