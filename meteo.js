let city = 'Paris';
getTemperature(city);

let changeCity = document.querySelector('#changer')
changeCity.addEventListener('click', () => {
    city = prompt('Choisissez votre ville :');
    getTemperature(city)
})

function getTemperature(city) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=97ad485b6db9822d9a93cb34073d61f3&units=metric';

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let reponse = request.response;
                /* console.log(reponse); */
                let temperature = reponse.main.temp;
                /* console.log(temperature); */
                let city = reponse.name;

                document.querySelector('#ville').textContent = city;               document.querySelector('#temperature_label').textContent = temperature;
            } else {
                alert('Une erreur est survenue, réessayez plus tard !')
            }
        }
    }
}