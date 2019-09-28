window.addEventListener("load",() => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = '${proxy}https://api.darksky.net/forecast/093ef2ab89d7a808cefbb7a6522a7072/${lat},${long}';
       
    fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            console.log(data);
        });
    }); 

    }
    else{
        h1.textContent = "plese enable location"
    }
});