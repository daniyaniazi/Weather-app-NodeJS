const request = require('request')


const geoCode = (address, callback) => {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZGFuaXlhbmlhemkiLCJhIjoiY2tsa3o0MnB1MDlsazJ3bXc5NmUyZGJqdiJ9.vaCAF6ohgl_APtkYbWkNJg&limit=1`

    request({ url: geocodeURL, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0]
            const location = body.features[0].place_name
            callback(undefined, { latitude, longitude, location })

        }
    })
}

module.exports = geoCode