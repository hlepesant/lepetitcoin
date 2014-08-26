function initialize(position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(latitude, longitude)
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'),
                                  mapOptions);

    setMarkers(map, beaches);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var beaches = [
    ['Bondi Beach', -33.890542, 151.274856, 4],
    ['Coogee Beach', -33.923036, 151.259052, 5],
    ['Cronulla Beach', -34.028249, 151.157507, 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    ['Maroubra Beach', -33.950198, 151.259302, 1]
];

function setMarkers(map, locations) {
    var image = {
        url : wc_icons.dark,
    };

    for (var i = 0; i < locations.length; i++) {
        var beach = locations[i];
        var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            title: beach[0],
            zIndex: beach[3]
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
