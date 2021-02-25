const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=46387c1660b314f0ae3ad64797499e4c&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    //const data = JSON.parse(response.body)

    if (error) {
        console.error("Unable to connect with weather service")
    }
    else if (response.body.error) {

        console.error(response.body.error.info)
    }
    else {
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. It fees like " + response.body.current.feelslike + " degress out")
    }
})