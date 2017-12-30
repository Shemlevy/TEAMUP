
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
            posData.address =res.data.results[0].formatted_address
            posData.postion = new google.maps.LatLng(lat, lng);
            return posData
        });
}
export default {
    getGeoByAddress
}