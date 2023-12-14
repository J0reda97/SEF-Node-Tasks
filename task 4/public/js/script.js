let form1 = document.getElementById('form1');

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    weatherFunction();
    form1.reset();
});

const errorF = document.getElementById('error');
const locationF = document.getElementById('location');
const lati = document.getElementById('lati');
const long = document.getElementById('long');
const forecastF = document.getElementById('forecast');

let weatherFunction = async () => {
    try {
        const country = document.getElementById('country').value;
        const res = await fetch('http://localhost:3000/weather?country=' + country);
        const data = await res.json();
        console.log(data);

        if (data.error) {
            errorF.innerText = data.error;
            locationF.innerText = '';
            lati.innerText = '';
            long.innerText = '';
            forecastF.innerText = '';
        } else {
            locationF.innerText = data.country.charAt(0).toUpperCase() + data.country.slice(1);
            lati.innerText = `Latitude --> ${data.lati}`
            long.innerText = `Longitude --> ${data.long}`
            forecastF.innerText = data.forecast;
            errorF.innerText = '';
        }
    } catch (e) {
        console.log(e);
    }
};
