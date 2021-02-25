const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')


geoCode('Istanbul', (error, data) => {
    console.log('ERROR', error)
    console.log("DATA", data)
})


forecast(41.01, 28.96028, (error, data) => {
    console.log('ERROR', error)
    console.log("DATA", data)
})
