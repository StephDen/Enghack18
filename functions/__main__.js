//https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI
const request = require('request');
const lib = require('lib');
var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI';
/**
* A basic Hello World function
* @param {string} loc Street address of place
* @returns {any}   long and lat of address
*/
module.exports = (loc = '', context, callback) => {
	return lib[`${context.service.identifier}.gmap_api`](loc , (err, result) => {
    callback(err, result);
  });
}
