function initMap() {

// ###  MAPS API KEY: AIzaSyA14CxnGqqgtwkr_LQt9iT4L8hePZa4-pQ ###


      // offset the map so infoWindow always shows in bounds
        google.maps.Map.prototype.setCenterWithOffset= function(latlng, offsetX, offsetY) {
            var map = this;
            var ov = new google.maps.OverlayView();
            ov.onAdd = function() {
                var proj = this.getProjection();
                var aPoint = proj.fromLatLngToContainerPixel(latlng);
                aPoint.x = aPoint.x+offsetX;
                aPoint.y = aPoint.y+offsetY;
                map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
            }; 
            ov.draw = function() {}; 
            ov.setMap(this); 

            console.log(this);
        };


      // for geocode part - sets infoWindow text to loc address
        // var placeId = 'ChIJJZaZrJs_TIYRAfap06LN3R0';
        var placeId = 'ChIJJ63x_5o_TIYR4du20kfYs5Y';

      // make the map 
        var latlng = new google.maps.LatLng(33.239547, -96.7863377);
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            // mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: latlng,
            zoomControls: false,
            disableDefaultUI:true,
            scrollwheel: false
        });

        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        var infowindow = new google.maps.InfoWindow({
          maxWidth: 75
        });
        var geocoder = new google.maps.Geocoder;  

      // geocode stuff 
        geocodePlaceId(geocoder, map, infowindow, placeId);

      // open the info window
        infowindow.open(map, marker);

      // set default map view to the right spot
        map.setCenterWithOffset(latlng, 0, -90);
      }   

      function geocodePlaceId(geocoder, map, infowindow, placeId) {
        geocoder.geocode({'placeId': placeId}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            console.log(results);
            if (results[0]) {
              // map.setZoom(5);
              // map.setCenter(results[0].geometry.location);
              // var marker = new google.maps.Marker({
              //   map: map,
              //   position: results[0].geometry.location
              // });

          // Set the content of the infoWindow to the geocode results 
              infowindow.setContent(results[0].formatted_address);
              // infowindow.open(map, marker);
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      }