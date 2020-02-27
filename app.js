const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direction:{
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv


const getInfo = async (direction) =>{

    try{
        let location = await lugar.getLugarLatLng(direction)
        let temp = await clima.getClima(location.lat, location.lng)
        return `El clima de ${direction} es de ${temp}`


    }catch (err){
        throw new Error(`No se pudo determinar el clima de ${direction}`)
    } 

}

getInfo(argv.direction).then(console.log).catch(console.log)

