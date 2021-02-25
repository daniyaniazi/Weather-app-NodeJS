const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')
const address = process.argv[2];


if (!address) {
    console.log("Please provide address")
}
else {
    geoCode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log("data location", location)
            console.log('data :', forecastData)
        })

    })


}