document.getElementById('new-country-btn').addEventListener('click', getRandomCountry);

function getRandomCountry() {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(countries => {
            const randomCountry = countries[Math.floor(Math.random() * countries.length)];
            displayCountryInfo(randomCountry);
        })
        .catch(error => console.error('Error:', error));
}

function displayCountryInfo(country) {
    const countryInfoDiv = document.getElementById('country-info');
    countryInfoDiv.innerHTML = `
        <h2>${country.name}</h2>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <img src="${country.flag}" alt="Flag of ${country.name}" width="150px">
        <!-- Add more information as needed -->
    `;
}

// Initially load a random country
getRandomCountry();
