var a = document.querySelector('ul');

var icon = document.querySelector('.menu-icon');
var anc = document.querySelector('.navy a');

var flag = 0
icon.addEventListener("click",function() {
    if(flag == 0) {
        a.classList.add("extra");
        flag = 1;
    }else{
        a.classList.remove("extra");
        flag = 0;
    }
})