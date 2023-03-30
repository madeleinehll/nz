let stop_lat = -36.833333;
let stop_lng = 174.8;
let zoom = 13;
let title = 'Auckland'

const STOPS = ["Rotorua",{
    title:"Auckland",
    user: "madeleinehll",
    lat: -36.833333,
    lng: 174.8,
    wikipedia: "https://de.wikipedia.org/wiki/Auckland"
}, "Christchurch"];
console.log(STOPS);




let map = L.map('map').setView([stop_lat, stop_lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup(title)
    .openPopup();