const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries);
    /* for(const country of countries){
        console.log(country.name);
    } */
    countries.forEach(country =>{
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            
            <h3>Name:${country.name.common} </h3>
            <p>Capital : ${country.capital ? country.capital[0]: 'No Capital' }</p>
            <button onclick="loadCountryDetails('${country.cca2}')" >Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}
const loadCountryDetails = code => {

    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log('btn clicked', url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = country => {
    const detailContainer = document.getElementById('country-details');
    detailContainer.innerHTML = `
    <div class="country-details">
    <h1 >Name: ${country.name.common}</h1>
    <img src='${country.flags.png}'>
    </div>
    

    `;
}
loadCountries();