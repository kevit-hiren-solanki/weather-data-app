const axios = require("axios");

const forcase = async (latitude, longitude, callback) => {
  url = `http://api.weatherstack.com/current?access_key=1efb2972cc53a9b28382b8f90ca63bc7&query=${latitude},${longitude}`;
  console.log(url);
  await axios.get(url).then((res, err) => {
    res = res.data;
    if (err) {
      callback("unable to connect to weather", error);
    }
    // else if(body.error)
    // {
    //     callback('error: ' + res.body.error);
    // }
    else {
      callback(undefined, {
        temperature: res.current.temperature,
        weather: res.current.feelslike,
      });
    }
  });
};
module.exports = forcase;
