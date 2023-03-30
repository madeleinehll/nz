let stop_lat = -36.833333;
let stop_lng = 174.8;

let map = L.map('map').setView([stop_lat, stop_lng], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup('Auckland.')
    .openPopup();