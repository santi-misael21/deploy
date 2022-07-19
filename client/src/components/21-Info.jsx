import { useState } from "react"

//Component Info: info about the trip 
export default function Info({info}){

    let titles= []
    for (let props in info){
        titles.push(props)
    }

    let objeto= {}
    
    for(let a= 0; a< titles.length; a++){
        objeto[titles[a]]= info[titles[a]]
    }
    
    const distance= objeto[titles[2]][0]['elements'][0]['distance']['text']

    return(
        <div>
            Info here
            <div>
                Punto de partida: {objeto[titles[0]]}
            </div>
            <div>
                Punto de destinación: {objeto[titles[1]]}
            </div>
            <div>
                Distancia entre ambos puntos: {objeto[titles[2]][0]['elements'][0]['distance']['text']}
            </div>
            <div>
                Tiempo de viaje estimado: {objeto[titles[2]][0]['elements'][0]['duration']['text']}
            </div>
            {/* {distance && fuel && <CostTrip distance={distance} fuel={fuel}/>} */}
        </div>
    )
}