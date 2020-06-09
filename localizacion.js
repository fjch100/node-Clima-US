const axios = require('axios');

let getLugarLatLon = async(city) => {

    let url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
    let axiosConfig = {
        params: {
            'countryIds': 'US',
            'namePrefix': city
        },
        headers: {
            'x-rapidapi-key': 'c798a5a0d3mshb2cdbb4774df224p168d08jsn4f5397d76015',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
        }
    };


    let res = await axios.get(url, axiosConfig);
    // console.log(res);
    if (res.data.data[0].length === 0) {
        throw new Error(`No hay resultados para : ${city}`);
    }
    let data = res.data.data[0];
    let direccion = data.name;
    let lat = data.latitude;
    let lon = data.longitude;
    return {
        direccion,
        lat,
        lon
    };
};

module.exports = {
    getLugarLatLon
}