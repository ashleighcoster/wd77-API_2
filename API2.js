//Set API URL 
const baseURL = "https://calendarific.com/api/v2/holidays?api_key=6659093680e9748b0be5d8518b8a854c452e1ac0"

//Link elements from html doc 
const getInfoButton = document.getElementById('submit')
// const yearButton = document.getElementById('searchYear')
const mainContainer = document.getElementById('mainContainer')

//Create event listeners 
getInfoButton.addEventListener('submit', displayData); 
// yearButton.addEventListener('submit', displayData)


function getInfo(country, year) { 

    // fetch("https://calendarific.com/api/v2/holidays?api_key=6659093680e9748b0be5d8518b8a854c452e1ac0&country=US&year=2021")
    fetch(`${baseURL}&country=${country}&year=${year}`)
    .then(res => res.json())
    .then(json => displayData((json)))
    // .then(data => {
    // console.log(data.response.holidays[0].date)
    // })
    .catch(err => console.log(err));
}

// getInfo()

function displayData(json) {
    // mainContainer.innerHTML = ''
    console.log(json);

    json.forEach(item => {
        const country = document.createElement('p')
        country.innerText = data.response.holidays[0].country
        mainContainer.appendChild(country)
    });
}

// .then(data => {
//     console.log(data.response.holidays[0].name) = name of holiday
//     })
// console.log(data.response.holidays[0].country) = name of country
//console.log(data.response.holidays[0].date) = year