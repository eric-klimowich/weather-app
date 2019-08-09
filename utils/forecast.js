const request = require('request')


const forecast = (longitude, latitude, callback) => {
    const forecastUrl = `https://api.darksky.net/forecast/d1e63bda71af2e89cefa84b08bd093a1/${latitude},${longitude}`
    
    request({ url: forecastUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

