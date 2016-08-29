var map;
      function initMap() {

        var myLatLng = {lat: 40.693067, lng: -73.917881};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 10,
          disableDefaultUI: true,
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Current location'
        });
      }
