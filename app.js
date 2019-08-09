const request = require('request')

// const url = 'https://api.darksky.net/forecast/d1e63bda71af2e89cefa84b08bd093a1/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log(response.body.error)
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
//     }
// })

// Geocoding
// Address -> Long/Lat -> Weather

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZWtsaW1vd2ljaCIsImEiOiJjano0ZHh1ZngwMTB0M2hyc2FsZTlxazhrIn0.83V5sgB0dgNrqZFqJxUmuw'

// request({ url: geocodeUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location!' Try another search.)
//     } else {
//         console.log('Longitude: ' + response.body.features[0].center[0])
//         console.log('Latitude: ' + response.body.features[0].center[1])
//     }
// })

// encodeURIComponent

const geocode = (address, callback) => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZWtsaW1vd2ljaCIsImEiOiJjano0ZHh1ZngwMTB0M2hyc2FsZTlxazhrIn0.83V5sgB0dgNrqZFqJxUmuw`

    request({ url: geocodeUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location! Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})