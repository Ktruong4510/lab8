function initMap() {
	// add your code here
	var ucsd_ltlng = {lat:32.8794363, lng:-117.2371568};

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map:map,
		title: "Student Services Center"
	}); 	
}