var map;

function initialize() {

    // Try HTML5 geolocation
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);

            var mapOptions = {
                zoom: 16,
                center: pos
            };

            var image = {
                url : wc_icons.dark,
            };

            map = new google.maps.Map(document.getElementById('map-canvas'),
                                          mapOptions);

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title:"You are here!"
            });


        }, function() {
            handleNoGeolocation(true);
        });

    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(48.856487, 2.351180),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
