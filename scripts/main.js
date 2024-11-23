var map = L.map('map').setView([28.388208, -81.577880], 13.12);

var marker = L.marker([28.375362300241918, -81.54940236724883]).addTo(map).bindPopup("Epcot");
var marker2 = L.marker([28.3571635771051, -81.56014648172405]).addTo(map).bindPopup("Hollywood Studios");
var marker3 = L.marker([28.418731274162802, -81.58119275611504]).addTo(map).bindPopup("Magic Kingdom");
var marker4 = L.marker([28.357961747963966, -81.59055843137953]).addTo(map).bindPopup("Animal Kingdom");

L.tileLayer('https://api.mapbox.com/styles/v1/lucasfabian6397/cm3tq3jnz000o01s08049ed4t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVjYXNmYWJpYW42Mzk3IiwiYSI6ImNtM3RwdXBzdjBhc2Eyam9qZGRsbWF5bHAifQ.cm2eDgwYJddOEu8Ha_H7xQ', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);