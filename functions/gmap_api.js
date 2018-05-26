//https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI

const https = require('https');
const lib = require('lib');

/**
* A basic Hello World function
* @param {string} loc Street address of place
* @returns {object} data long and lat of address
*/
module.exports = (loc = '', context, callback) => {
	https.get('https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI', (resp) => {
		let data = '';
		resp.on('data', (chunk) =>{
			data +=chunk;
		});
	});
	return data
}
