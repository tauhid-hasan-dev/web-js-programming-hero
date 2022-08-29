const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countrys => {
    countrys.forEach(country => {
        console.log(country);
        const parentDiv = document.getElementById('parent')
        const childDiv = document.createElement('div');
        childDiv.classList.add('country')
        childDiv.innerHTML = `
         <h1> Name : ${country.name.common} </h1>
         <h3> Capital:  ${country.capital ? country.capital[0] : 'No capital'}<h3>
         <button onclick = "loadConuntryDetail('${country.cca2}')">Country Details</button>
        `
        parentDiv.appendChild(childDiv)
    });
}

const loadConuntryDetail = (code) => {
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
    const countryDetails = document.getElementById('country-detail');
    countryDetails.innerHTML =
        `
    <h3> Name : ${country.name.common} </h3>
    <img src="${country.flags.png}"> 
    
    `
}

loadCountries();