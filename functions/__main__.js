//https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI
const request = require('request');
const lib = require('lib');
/**
* A basic Hello World function
* @param {integer} bars number of bars
* @param {string} address address of person
* @param {float} lat lattitude
* @param {string} lng longitude
* @returns {any}  JSON object of route
*/
module.exports = async (bars = 0, address = null,lat = null,lng = null, context) => {
	//converting address to a long & lat
	let result;
	var data = [];
	var tmplat;
	var tmplng;
	var x;
	if (address != null) {
		result = await lib[`${context.service.identifier}.gmap_api`]({
			address: address
		});
		return result
	}
	else{
		for(i=0;i<11 || i<bars;i++){
			if(i==0){
				tmplat = lat;
				tmplng = lng;
			}else if(i<11){
				tmplat = data[i-1]["lat"];
				tmplng = data[i-1]["lng"];
			}
				result = await lib[`${context.service.identifier}.get_route`]({
					lat: tmplat,
					lng: tmplng,
				});

				//for(x=0;x<11;x++){
					//if(result["results"][x]["geometry"]["id"] in data){}
				//}
				data[i]= {"lat":result["results"][1]["geometry"]["location"]["lat"],"lng":result["results"][1]["geometry"]["location"]["lng"].toString()};
		}
		return data
	}
}
