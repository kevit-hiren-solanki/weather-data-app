
const request = require('postman-request')
const geocode =  (address,callback) =>{
    url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGlyZW4xIiwiYSI6ImNsNGkwOG9oczA5ejcza3AydDcxNWpwMTcifQ.JWgNFUU5raVDGnozUkmxFA&limit=1`
    request({url, json : true}, (error,{body})=>{
        if(error)
        {
            callback('unable to connect services',undefined)
        }
        else if(body.features.length == 0)
        {
            callback('unable to find a location',undefined)
        }
        else{
            callback(undefined,{
                location : body.features[0].text,
                latitude  : body.features[0].center[1],
                longitude :  body.features[0].center[0]
            })
        }

    })
}

module.exports = geocode