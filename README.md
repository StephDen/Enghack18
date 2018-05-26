![logo](Capture.JPG)
## A Pub Crawl web app & api

#### Web App:
>Go to https://sh1thoppens.azurewebsites.net
>Enter in a location or enter in your current location
>Choose number of stops
>All Set!

#### API:
https://stephden.stdlib.com/nghack18@dev/?<params>=<values>
>@param {integer} bars Number of bars for crawl
>@param {string} address Physical street address
>@param {float} lat Lattitude
>@param {float} lng longitude

>@returns {object}  JSON object of route

Enter in either a street address or the lattitude & longitude of location. The api return a JSON object
of a recommended route. The max number of stops is 10.

Example output:
>0
lat	43.47159199999999
lng	-80.5453862
id	"a8b18714d3456caa3be95abecbdf10bf3981fe45"
1
lat	43.47163729999999
lng	-80.5451423
id	"b0fd318e5a0db32a38b82ec1a4f6f7181ee36b44"
2
lat	43.471752
lng	-80.54391369999999
id	"2c492d87aa01fc46f843bd81c6a20cebbe3715cf"
3
lat	43.47121859999999
lng	-80.5427429
id	"cc8b120dbea6b01270fe004ea7c0debe91afac86"
4
lat	43.4697279
lng	-80.54090939999999
id	"857a3c4062a850526543b1f775083006247247ad"

#### Dependencies:
>node.js 8.x
>stdlib
>request
