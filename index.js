logJSONData();

async function logJSONData() {
    let fetch_string = "https://geo.ipify.org/api/v2/country?apiKey=at_ysI4OWawEO0Z7IXkKZQdIKFZNgoRY&ipAddress=8.8.8.8";
    const response = await fetch(fetch_string);
    const jsonData = await response.json();
    console.log(jsonData);
  }


//   var map = L.map('map').setView([51.505, -0.09], 13);

//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);
  
//   L.marker([51.5, -0.09]).addTo(map)
//       .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//       .openPopup();