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
