
var map = L.map('map').setView([-37.8575, 175.679722], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var circle = L.circle([-36.833333,174.8], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
circle.bindPopup("<strong> Hier ist Auckland </strong>").openPopup();
// var popup = L.popup()
//    .setLatLng([-36.833333, 174.8])
//   .setContent("Hier liegt das Hobbition-Filmset.")
//   .openOn(map);
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);