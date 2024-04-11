
let map = L.map('map').setView([-36.833333,174.8], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let circle = L.circle([-36.833333,174.8], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(map);
circle.bindPopup("<strong> Hier ist Auckland </strong>").openPopup();
// let popup = L.popup()
//    .setLatLng([-36.833333, 174.8])
//   .setContent("Hier liegt das Hobbition-Filmset.")
//   .openOn(map);
let popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

/* comment
*/
let absatz = "Hi" /*Variable definiert*/
let nummer = 6;
console.log(`
<h3>Test für Tutorial</h3>
<p> ${absatz}</p>
<p> Nummer plus 1 = ${nummer+1}</p>
<div id ="map"></div>`
);