const axios = require('axios')

const getLugarLatLng = async (direction) =>{

    const encodedUrl = encodeURI(direction) 

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': '35eb1fd381msh409dbad1456a85bp16da08jsna788c0626fb4'}
    });
    
    let respuesta = await instance.get()

    if(respuesta.data.Results.length === 0)
        throw new Error(`No hay resultados para ${direction}`)

    const data = respuesta.data.Results[0]
    const location = data.name
    const lat = data.lat
    const lng = data.lon
    
    return {
        location,
        lat,
        lng
    }
}

module.exports ={
    getLugarLatLng
}

