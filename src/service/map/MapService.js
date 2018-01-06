
import axios from 'axios'


function getGeoByAddress(e) {
    e.preventDefault();
    let searchPosition = e.target.value
    let posData = {}
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchPosition}&key=AIzaSyBMPwmpKGkNozJfQ2zrVZdvlvJDv7QsZrM`)
        .then(res => {
            var lat = res.data.results[0].geometry.location.lat;
            var lng = res.data.results[0].geometry.location.lng;
            posData.lat = lat
            posData.lng = lng
            console.log(res.data.results)
            posData.address =res.data.results[0].formatted_address
            posData.postion = new google.maps.LatLng(lat, lng);
            return posData
        });
}



function getDistanceFromUser(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  
export default {
    getGeoByAddress,
    getDistanceFromUser
}