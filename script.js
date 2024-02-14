const APIkey = "23513af0381811c48b12849bdf5087a8";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?&q=";

const city = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

// Default city
const defaultCity = "Ahmedabad"; // Change this to the desired default city

// Function to update weather information
async function weatherinfo(city) {
    const response = await fetch(APIurl + city + `&appid=${APIkey}`);
    const data = await response.json();

    console.log(data);

    const tempchange = document.querySelector(".temp");
    const tempkelvtocel = Math.round((data.main.temp) - 273.15);

    tempchange.innerText = tempkelvtocel + " °C";
    document.querySelector(".humtext").innerText = data.main.humidity + " %";
    document.querySelector(".windtext").innerText = data.wind.speed + " km/h";
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".country").innerText = data.sys.country;
}

// Show weather information for the default city on page load
weatherinfo(defaultCity);

// Event listener for the search button
searchbtn.addEventListener("click", () => {
    weatherinfo(city.value);
});


