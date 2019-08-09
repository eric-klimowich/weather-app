const request = require('request')

const url = 'https://api.darksky.net/forecast/d1e63bda71af2e89cefa84b08bd093a1/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.currently)
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)

    // it is currently 58 degrees out. there is a 0% chance of rain.
})