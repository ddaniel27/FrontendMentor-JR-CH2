const finishButton = document.getElementById("finish-button");
const buttonProject = document.getElementById("project-button");
const closeModalButton = document.getElementById("close-modal");
const modalCards = [...document.getElementsByClassName("modal-stand-card")];
const continueButtons = [...document.getElementsByClassName("modal-card-button")];
const modalButtons = [...document.getElementsByClassName("stand-button")];
const children = modalCards.map(card => [...card.childNodes][1]);

buttonProject.addEventListener("click", function(){
    [...document.getElementsByClassName("modal")][0].style.display = "block";
});
closeModalButton.addEventListener("click", function(){
    [...document.getElementsByClassName("modal")][0].style.display = "none";
});
modalButtons.forEach((button,idx) => {
    button.addEventListener("click", function(){
        children.forEach(inp=>inp.checked=false);
        modalCards.forEach(arrayCard => arrayCard.classList.remove("selected-modal-card"));
        children[idx+1].checked = true;
        modalCards[idx+1].classList.add("selected-modal-card");
        [...document.getElementsByClassName("modal")][0].style.display = "block";
        console.log("click ",idx);
    });
});
continueButtons.forEach(button=>{
    button.addEventListener("click", function(){
        [...document.getElementsByClassName("modal")][0].style.display = "none";
        [...document.getElementsByClassName("success")][0].style.display ="block";
    });
});
finishButton.addEventListener("click", function(){
    [...document.getElementsByClassName("success")][0].style.display ="none";
});
modalCards.forEach((card,idx) => {
    children[idx].addEventListener("change",function(){
        modalCards.forEach(arrayCard => arrayCard.classList.remove("selected-modal-card"));
        if(this.checked){
            card.classList.add("selected-modal-card");
        }
    });
});
