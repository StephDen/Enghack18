const request = require('request');
/**
* @param {string} address Street address of place
* @returns {object} data long and lat of address
*/
module.exports = (address, context, callback) => {
	var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCL8SjZWbHGwJnaLVN37bE4InxQ42p1vuQ`;
	var data = {};
	request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        data = JSON.parse(body);
				data = {"lat" : data["results"][0]["geometry"]["location"]["lat"] , "lng" : data["results"][0]["geometry"]["location"]["lng"]};
				callback(null, data);
		 }
	 });
}
