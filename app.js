const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

geocode(location, (error, locationData) => {
    if (error) {
        return console.log(error)
    }
    
    forecast(locationData.longitude, locationData.latitude, (error, forecastData) => {
        if (error) {
            console.log(error)
        }
        
        console.log(locationData.location)
        console.log(forecastData)
      })
})
