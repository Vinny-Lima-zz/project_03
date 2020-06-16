window.onload = function(){
    
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-23.162736,-45.891486),
            scrollwheel: false,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("map"), mapProp);
    }

    function addMarker(lat,lng,icon,content){
        var latLng = {lat:lat, lng:lng};

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        });

        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        });
    }

    initialize();
    
    var adressContent = '<p style="color:black;">Rua Benedito Alves da Silva<br>São José dos Campos - SP</p>';
    addMarker(-23.162736,-45.891486,'',adressContent);
}