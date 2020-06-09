const localizacion = require('./localizacion');

const clima = require('./clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

//console.log(argv);
//let city = encodeURI(argv.direccion);

let city = argv.direccion;
let loc;
let climaLoc;
let getInfo = async(dir) => {
    loc = await localizacion.getLugarLatLon(dir);
    climaLoc = await clima.getClima(loc.lat, loc.lon);
    return climaLoc;

}

getInfo(city).then((climafinal) => {
        console.log(`El clima de ${city} es de ${climafinal.temp}`);
    })
    .catch(error => console.log(`No se logro determinar el clima de ${city}`))