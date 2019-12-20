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
            place.classList.add('plac');   
            leftResult.appendChild(place);

            midResult.classList.add('mid');
            temperature.classList.add('temp');
            midResult.appendChild(temperature);

            rightResult.classList.add('right');
            condition.classList.add('cond');
            rightResult.appendChild(condition);

            main.appendChild(inputDiv);
            inputDiv.innerHTML = radioHtml;
            inputDiv.classList.add('tempType')

            resultDiv.appendChild(leftResult);
            resultDiv.appendChild(midResult);
            resultDiv.appendChild(rightResult);

        }

        getData(cityInput.value);  

    }

});

async function getData(enteredPlace) 
{

    console.log(`http://api.openweathermap.org/data/2.5/weather?q=${enteredPlace}&units=metric&APPID=9dde51698ed12a242e93c14b7420f478`)
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${enteredPlace}&units=metric&APPID=9dde51698ed12a242e93c14b7420f478`, 
        {mode: 'cors'});
    const data = await response.json();
    getGif(data.weather[0].description);
    if(data.cod == 200)
    {
        console.log(data);
        temperature.textContent = data.main.temp;
        place.textContent = data.name;
        condition.textContent = data.weather[0].description;
    }
    
}

async function getGif(cond)
{
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=aozK5UQ0JBZcL8oNtHIA9ho684DCIDfV&q=${cond}&limit=25&offset=0&rating=R&lang=en`, {mode: 'cors'})
    const pic = await response.json();
    imageDiv.style.backgroundImage = `url(${pic.data[0].images.original.url})`;
}