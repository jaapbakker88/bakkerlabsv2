var map;
function initMap() {

  var newYork = {lat: 40.693067, lng: -73.917881};
  var amsterdam = {lat: 52.373690, lng: 4.886247};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: amsterdam,
    zoom: 10,
    disableDefaultUI: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false
  });

  var marker = new google.maps.Marker({
    position: amsterdam,
    map: map,
    title: 'Current location'
  });
}

$(function(){
  $('#submit-enquiry').click(function(e){
    e.preventDefault();

    // create object from form data
    var data = $('#inquiry').serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

    // send object to Express submit route
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '/submit',
      success: function(data) {
        console.log(JSON.stringify(data));
          if (data) {
            $('.box').addClass('success');
          } else if (JSON.stringify(data) === 'false') {
            alert('Warning')
          }
      }
    });

  });
});
