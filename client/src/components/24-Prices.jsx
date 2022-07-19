import { useState } from "react"
import CostTrip from "./32-CostTrip";
import './tabla.css';

export default function Prices({prices, fuels}){

    let [render, setRender] = useState([])
    let [distance, setDistance] = useState()

    let objeto ={}

    for (let c= 1; c< fuels.length; c++){
        let combus= fuels[c]
        objeto[combus]=prices[0][combus]
    }

    function handleOption(e){
        let clave= e.target.value
        let valor= objeto[e.target.value]
        setRender([clave, valor])
    }

    // var inputid= document.getElementById("inputbueno")
    // var inputclass= document.getElementsByClassName("inputbueno")
    // console.log(inputclass)
    // new google.maps.places.Autocomplete(inputid)

    return (
        <div>{"Combustible "} 
            <select onChange={(e)=>handleOption(e)}>
                {fuels.map((fuel, i)=><option key={i}>{fuel}</option>)}
            </select>

            <div>
            {render.length > 0 && render[0]!== fuels[0] ?
                    <>{render[0]} = {render[1]}</> : <br/> 
            }
            </div>

            <input name="distance" value={distance || ""} placeholder="Distancia en km" onChange={(e)=> setDistance(parseFloat(e.target.value))}/>
            
            <CostTrip unicFuel={render} distance={distance}/>
            {/* <Input/> */}{/*CANCELAMOS INPUT, PORQUE LOS COMPONENTS DE MATI YA SE ENCARGAN DE REGISTRAR LAS UBICACIONES*/}
            {/* <input type="text" placeholder="Origen" id="inputbueno"/>
            <br/>
            <input type="text" placeholder="Destino" id="inputbueno"/> */}
        </div>
    )
}