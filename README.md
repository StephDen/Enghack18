# !!!!!Project Deprecated, Maps API keys disabled!!!!!
![logo](Capture.JPG)
## A Pub Crawl microservice (Web App & API)

#### Web App:
>Go to https://sh1thoppens.azurewebsites.net
>Enter in a location or enter in your current location
>Choose number of stops
>All Set!

#### API(GET method only):
>https://stephden.stdlib.com/nghack18@dev/?<params>=<values>

>@param {integer} bars Number of bars for crawl

>@param {string} address Physical street address

>@param {float} lat Lattitude

>@param {float} lng longitude


>@returns {object}  JSON object of route

1. Enter in either a street address or the lattitude & longitude of location.
2. The api return a JSON object of a recommended route.
*The max number of stops is 10.*

Example output:
```javascript
[{  "lat":43.47159199999999,
    "lng":-80.5453862,
    "id":"a8b18714d3456caa3be95abecbdf10bf3981fe45"},
 {  "lat":43.47163729999999,
    "lng":-80.5451423,
    "id":"b0fd318e5a0db32a38b82ec1a4f6f7181ee36b44"}]
```

#### Dependencies:
>node.js 8.x

>stdlib

>request
