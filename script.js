const apiKey = '8d86efb729284872820211809242203';
const btn = document.querySelector('#btn');
const text = document.querySelector('#data');

btn.addEventListener('click', getLocation);

function getLocation(e) {
    e.preventDefault();
    const city = document.querySelector('#location').value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } 
      return response.json(); 
    })
    .then(data => {
        text.textContent = 'Location: ' + data.location.name + 'Celsius: ' + data.current.temp_c + ' Fahrenheit: ' + data.current.temp_f;
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

