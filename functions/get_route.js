const request = require('request');
/**
* A basic Hello World function
* @param {float} lat
* @param {float} lng
* @returns {any} data long and lat of address
*/
module.exports = (lat= 43.5890, lng = 0.0, context,callback) => {
  var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&type=bar&rankby=distance&key=AIzaSyCL8SjZWbHGwJnaLVN37bE4InxQ42p1vuQ`;
  var data = {};
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
      callback(null,data);
    }
  });
}
