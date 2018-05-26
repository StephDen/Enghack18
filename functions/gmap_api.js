//https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI
var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI';
var data = {};
const request = require('request');
/**
* A basic Hello World function
* @param {string} loc Street address of place
* @returns {object} data long and lat of address
*/
module.exports = (loc = '', context, callback) => {
	request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        callback(null,JSON.parse(body));
     }
	 });
}
