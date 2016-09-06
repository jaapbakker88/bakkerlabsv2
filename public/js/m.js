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
    console.log('button clicked');

    var data = $('#inquiry').serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

    console.log(data)

    // var data = {};
    // data.title = "title";
    // data.message = "message";

    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '/submit',
      success: function(data) {
        console.log('success');
        console.log(JSON.stringify(data));
        $('.box').addClass('flipped');
      }
    });

  });
});
