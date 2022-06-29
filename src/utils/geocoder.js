const axios = require("axios");
const geocode = async (address, callback) => {
  url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGlyZW4xIiwiYSI6ImNsNGkwOG9oczA5ejcza3AydDcxNWpwMTcifQ.JWgNFUU5raVDGnozUkmxFA&limit=1`;
  await axios.get(url).then((res, err) => {
    res = res.data;
    if (err) {
      callback("unable to connect services", undefined);
    } else if (res.features.length == 0) {
      callback("unable to find a location", undefined);
    } else {
      // console.log(res.features[0].place_name);
      callback(undefined, {
        location: res.features[0].place_name,
        latitude: res.features[0].center[1],
        longitude: res.features[0].center[0],
      });
    }
  });
};

module.exports = geocode;
