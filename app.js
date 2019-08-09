const request = require('request')

const url = 'https://api.darksky.net/forecast/d1e63bda71af2e89cefa84b08bd093a1/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.currently)
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)

    // it is currently 58 degrees out. there is a 0% chance of rain.
})

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZWtsaW1vd2ljaCIsImEiOiJjano0ZHh1ZngwMTB0M2hyc2FsZTlxazhrIn0.83V5sgB0dgNrqZFqJxUmuw'

request({ url: geoUrl, json: true }, (error, response) => {
    console.log('Longitude: ' + response.body.features[0].center[0])
    console.log('Latitude: ' + response.body.features[0].center[1])
})