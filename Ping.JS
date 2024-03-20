const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");
let hiddenError = document.querySelector(".hidden");

submitBtn.addEventListener('click',function(){
    const emailValue = /[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
    
    if(!emailValue.test(emailInput.value)){
       hiddenError.style.visibility = "visible";
    } else {
        hiddenError.style.visibility = "hidden";
    }
});