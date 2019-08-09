const request = require('request')

const url = 'https://api.darksky.net/forecast/d1e63bda71af2e89cefa84b08bd093a1/37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})