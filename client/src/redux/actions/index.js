import axios from 'axios';

// export const GET_FUELS = "GET_FUELS";
export const SAVE_HTML = "SAVE_HTML";
export const GET_FUELTABLE = "GET_FUELTABLE";

/*
`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${finish}&origins=${start}&key=${key}`
*/

//OBSOLETA
// export const apiMatrix = (start, finish, key) => {
//     return async function (dispatch) {
//         axios.get(`http://localhost:4001/matrix/?start=${start}&finish=${finish}&key=${key}`
//         ).then((r) => dispatch({ type: MATRIX, payload: r.data })
//         ).catch(e => console.log(e))
//     }
// }

// export const getfuels = () => {
//     return async function (dispatch) {
//         axios.get(`http://localhost:4001/table?refresh=true`
//         ).then(r => r
//         ).then(r => dispatch({ type: GET_FUELS, payload: r.data })
//         ).catch(e => console.log(e))
//     }
// }

export const loadHTML = (html) => {
    return {
        type: SAVE_HTML,
        payload: html
    }
}

export const getFuelTable = (boolean) => {
    let refresh = ""
    if (boolean) refresh = `refresh=${boolean}`
    return async function (dispatch) {
        axios.get(`http://localhost:4001/table?${refresh}`
        ).then(r =>
            dispatch({
                type: GET_FUELTABLE,
                payload: r.data
            })
        ).catch(e => console.log(e))
    }
}
