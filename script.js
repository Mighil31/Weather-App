const cityInput = document.querySelector("#form");
const searchDiv = document.querySelector('#search');
const main = document.querySelector('#main');
const imageDiv = document.createElement('div');

cityInput.value = "";
let moved = false;

cityInput.addEventListener("keyup", function(event){
    if(event.keyCode === 13 )
    {
        console.log(cityInput.value);
        if(!moved)
        { 
            moved = true;
            searchDiv.classList.add("moveUp");
            setTimeout(function(){
                main.appendChild(imageDiv);
                imageDiv.classList.add("gif");
            }, 1500);
            
        }
    }
});