const axios = require('axios')


const getClima = async (lat, lon) => {
    
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=10da7ba84621babd9ff22d9005fcc782&units=metric`)
    
    return respuesta.data.main.temp

}

module.exports ={
    getClima
}