const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

geocode(address, (error, { longitude, latitude, location}) => {
    if (address) {
        if (error) {
            return console.log(error)
        }
        
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                console.log(error)
            }
            
            console.log(location)
            console.log(forecastData)
          })
    } else {
        console.log('Please enter a location!')
    }
    
})
