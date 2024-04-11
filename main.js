
let lat = -36.833333;
let lng = 174.8;
let zoom= 13

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//.toFixed() = Nachkommastellen 

let popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

L.control.scale({
    imperial:false,
    maxWidth: 200
}).addTo(map);
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


let jsonPunkt = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [lng, lat]
    },
    "properties": {
      "name": "Auckland"
    }
  };
  L.geoJSON(jsonPunkt, {}).bindPopup(function (layer) {
    return `
    <strong>${layer.feature.properties.name}</strong>
    <ul>
       <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(2)}</li> 
       <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(2)}</li>
    </ul>
`;
}).addTo(map);