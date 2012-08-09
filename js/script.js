var mapOptions = {
	center: new google.maps.LatLng(48.478144, 135.10108),
	zoom: 8,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map( document.getElementById('gmap'), mapOptions );

google.maps.event.addListener(map, 'zoom_changed', function() {
	console.log ( 'zoom level is ' + map.getZoom() ); 
});






