const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=46387c1660b314f0ae3ad64797499e4c&query=${latitude},${longitude}&units=f`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect with weather service", undefined)
        }
        else if (body.error) {

            callback(body.error.info, undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It fees like " + body.current.feelslike + " degress out. the humidity is" + body.current.humidity + "%")
        }
    })
}

module.exports = forecast