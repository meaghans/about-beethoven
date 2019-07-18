var ourLoc;
var view;
var map;

function map_api(){
  ourLoc = ol.proj.fromLonLat([-80, 25]);
  view = new ol.View({
    center: ourLoc,
    zoom:6
  });

  map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
loadTilesWhileAnimating: true,
view:view
  /*
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
  })*/
});
}
function panHome(){
  view.animate({
    center: ourLoc,
    duration: 2000
  });
}

function panToLocation(){
  var countryName = document.getElementById("country-name").value;
  /* if(countryName === ""){
    alert("You don't have a country name!");
    return;
  }*/

var query = "https://restcountries.eu/rest/v2/name/"+countryName;
query = query.replace(/ /g, "%20")
alert(query);

var countryRequest = new XMLHttpRequest();
countryRequest.open('GET', query, false);

countryRequest.send();
if(countryRequest.readyState != 4 || countryRequest.status != 200 || countryRequest.responseText === ""){
  window.console.error("Request had an error!");
  return;
}
var countryInformation = JSON.parse(countryRequest.responseText);

var lat = countryInformation[0].latlng[0];
var lon = countryInformation[0].latlng[1];

window.console.log(countryName + ":lon" + "& lat" +lat);

alert("Ready State " + countryRequest.readyState);
alert("Status " + countryRequest.status);
alert("Response " + countryRequest.responseText);

var location = ol.proj.fromLonLat([lon, lat]);

view.animate({
  center: location,
  duration: 2000
});
}
window.onload = map_api;
