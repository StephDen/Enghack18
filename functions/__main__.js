//https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI
const request = require('request');
var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI';
/**
* A basic Hello World function
* @param {string} loc Street address of place
* @returns {any} body long and lat of address
*/
module.exports = (loc = '', context, callback) => {
	request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        callback(null,body);  // Print the google web page.
     }
	 })
}
