const mapTiles = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";

let myMap = L.map("map").setView([29.980641, -95.508987], 16);

L.tileLayer(mapTiles, {
  maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([29.980641, -95.508987]).addTo(myMap);
