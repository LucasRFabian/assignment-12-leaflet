var map = L.map('map2').setView([28.060881, -83.678462], 6.4);

L.tileLayer('https://api.mapbox.com/styles/v1/lucasfabian6397/cm3tq3jnz000o01s08049ed4t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjYXNmYWJpYW42Mzk3IiwiYSI6ImNtM3RwdXBzdjBhc2Eyam9qZGRsbWF5bHAifQ.cm2eDgwYJddOEu8Ha_H7xQ', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

for (let i = 0; i < places.length; i++) {
    L.marker([places[i].latitude, places[i].longitude]).bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>').addTo(map);
}
