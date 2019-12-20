const cityInput = document.querySelector("#form");
const searchDiv = document.querySelector('#search');
const main = document.querySelector('#main');
const imageDiv = document.createElement('div');
const resultDiv = document.createElement('div');

cityInput.value = "";
let moved = false;
let first = true;

cityInput.addEventListener("keyup", function(event){
    if(event.keyCode === 13)
    {
        if(first) //first time entering then divs have to be loaded
        {
            first = false;
            console.log(cityInput.value);
            main.appendChild(imageDiv);
            imageDiv.classList.add("gif");       
            main.appendChild(resultDiv);
            resultDiv.classList.add("result");
        }
    }

});