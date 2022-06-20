const request = require('postman-request')

const forcase = (latitude, longitude,callback) => {
    console.log(latitude,longitude);
    
    url = `http://api.weatherstack.com/current?access_key=1efb2972cc53a9b28382b8f90ca63bc7&query=${latitude},${longitude}`
    console.log(url);
    
    request({url,json : true},(error,{body}) => {
            if(error)
            {
                callback('unable to connect to weather',error)
            }
            else if(body.error)
            {
                callback('error: ' + response.body.error);
            }
            else
            {
                callback(undefined,{
                    'temperature': body.current.temperature,
                    'weather': body.current.feelslike
                })
            }
    })    
        
}

module.exports = forcase