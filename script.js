const cityInput = document.querySelector("#form");
const searchDiv = document.querySelector('#search');
const main = document.querySelector('#main');

const imageDiv = document.createElement('div');
const resultDiv = document.createElement('div');
const leftResult = document.createElement('div');
const midResult = document.createElement('div');
const rightResult = document.createElement('div');
const inputDiv = document.createElement('div');
let place = document.createElement('div');
let temperature = document.createElement('div');
let condition = document.createElement('div');


var radioHtml = '<input class="tempTypeInput" type="checkbox" id="#celc"';
radioHtml += ' checked="checked"';
radioHtml += '>Celcius</input>';
radioHtml.textContent = "Celcius"

cityInput.value = "";
let moved = false;
let first = true;

cityInput.addEventListener("keyup", function(event)
{
    if(event.keyCode === 13)
    {
        if(first) //first time entering then divs have to be loaded
        {
            first = false;

            main.appendChild(imageDiv);
            imageDiv.classList.add("gif");       
            main.appendChild(resultDiv);
            resultDiv.classList.add("result");

            leftResult.classList.add('left');
            place.textContent = cityInput.value;
            place.classList.add('place');
            leftResult.appendChild(place);

            midResult.classList.add('mid');
            temperature.textContent = "26C";
            temperature.classList.add('temp');
            midResult.appendChild(temperature);

            rightResult.classList.add('right');
            condition.textContent = "HOT AF";
            condition.classList.add('cond');
            rightResult.appendChild(condition);

            main.appendChild(inputDiv);
            inputDiv.innerHTML = radioHtml;
            inputDiv.classList.add('tempType')

            resultDiv.appendChild(leftResult);
            resultDiv.appendChild(midResult);
            resultDiv.appendChild(rightResult);

        }

    }

});