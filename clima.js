const axios = require('axios');

const getClima = async(lat, lon) => {

    let url2 = 'http://api.openweathermap.org/data/2.5/weather';
    let axiosConfig2 = {
        params: {
            'lat': lat,
            'lon': lon,
            'units': 'metric',
            'appid': 'c7993d341dbdf7e538d0827b006f8248',
        }
    };
    //console.log(axiosConfig2);

    const res = await axios.get(url2, axiosConfig2);

    if (res.cod === "400") {
        throw (`Error no weather data for lat: ${lat} , lon:${lon}`);
    }

    //return res.data.main.temp;
    return res.data.main;

};

module.exports = {
    getClima
}