 function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 59.3297578,
            lng: 18.0572531
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        { lat: 57.7089, lng: 11.9746 },
        { lat: 55.6050, lng: 13.0038 },
        { lat: 59.8586, lng: 17.6389 }
    ];
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerClusterer = new markerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
