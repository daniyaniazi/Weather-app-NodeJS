const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')


geoCode('paris', (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log("data location", data.location)
        console.log('data :', forecastData)
    })

})


