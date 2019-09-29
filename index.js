window.addEventListener("load",() => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description';)
    let temperatureDegree = document.querySelector('.temperature-degree';)
    let locationTimezone = document.querySelector('.location-timezone';)

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = 'https://api.darksky.net/forecast/093ef2ab89d7a808cefbb7a6522a7072${lat},${long}';
       
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temperature, summary} = data.currently
            // set DOM elements from the API
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;

        });
    }); 

    }
    else{
        h1.textContent = "please enable location"
    }
});

https://api.darksky.net/forecast/093ef2ab89d7a808cefbb7a6522a7072/37.8267,-122.4233