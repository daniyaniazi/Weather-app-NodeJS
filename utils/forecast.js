const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=46387c1660b314f0ae3ad64797499e4c&query=${latitude},${longitude}&units=f`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect with weather service", undefined)
        }
        else if (response.body.error) {

            callback(response.body.error.info, undefined)
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. It fees like " + response.body.current.feelslike + " degress out")
        }
    })
}

module.exports = forecast