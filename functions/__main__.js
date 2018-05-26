//https://maps.googleapis.com/maps/api/geocode/json?address=University+of+Waterloo&key=AIzaSyC5sflggRGVfUwqg_yQKyqHkeCdwQFNGrI
const request = require('request');
const lib = require('lib');
/**
* A Pub Crawl route finder api
* @param {integer} bars number of bars
* @param {string} address address of person
* @param {float} lat lattitude
* @param {float} lng longitude
* @returns {any}  JSON object of route
*/
module.exports = async (bars = 0, address = null,lat = 0.0,lng = 0.0, context) => {
	//converting address to a long & lat
	var result;
	var data = [];
	var tmplat;
	var tmplng;
	var x;
	var ids = [];

	if (address != null) {
		result = await lib[`${context.service.identifier}.gmap_api`]({
			address: address
		});

		lat = result['lat'];
		lng = result['lng'];
		for(i=0;i<11 && i<bars;i++){
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
				for(x=1;x<bars;x++){
					if(!ids.includes(result["results"][x]["id"])){
						ids.push(result["results"][x]["id"]);
						data[i]= {"lat":result["results"][x]["geometry"]["location"]["lat"],"lng":result["results"][x]["geometry"]["location"]["lng"], "id": result["results"][x]["id"] };
						break
					}
				}
		}
		return data
	}
	else{
		for(i=0;i<11 && i<bars;i++){
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
				for(x=1;x<bars;x++){
					if(!ids.includes(result["results"][x]["id"])){
						ids.push(result["results"][x]["id"]);
						data[i]= {"lat":result["results"][x]["geometry"]["location"]["lat"],"lng":result["results"][x]["geometry"]["location"]["lng"], "id": result["results"][x]["id"] };
						break
					}
				}
		}
		return data
	}
}
