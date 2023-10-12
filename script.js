var a = document.querySelector('ul');
var anc = document.querySelector('.anc');
var icon = document.querySelector('.menu-icon');
var anc = document.querySelector('.navy a');

var flag = 0
icon.addEventListener("click",function() {
    if(flag == 0) {
        a.classList.add("extra");
        a.classList.add("an");
        // anc.style.display="block";
        flag = 1;
    }else{
        a.classList.remove("extra");
        flag = 0;
    }
})


// project section 
var math = document.querySelector(".na1")
math.addEventListener("click",matheran)
function matheran() {
    
}

var proj1 = document.querySelector(".proj1")
proj1.addEventListener("click",move)
function move() {
    window.open("matheran.html")
}

// var panvel = document.querySelector(".proj2")
// panvel.addEventListener("click",move)
// function move() {
//     window.open("http://127.0.0.1:5500/about.html")
// }

