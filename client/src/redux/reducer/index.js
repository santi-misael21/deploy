import {
    // GET_FUELS,
    GET_FUELTABLE,
    SAVE_HTML
} from '../actions/index.js'


const initialState = {
    // dataFuels: [],
    // html: false,
    prices: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_FUELS:
        //     return {
        //         ...state,
        //         dataFuels: [action.payload]
        //     };
        // case SAVE_HTML:
        //     return {
        //         ...state,
        //         html: action.payload
        //     };
        case GET_FUELTABLE:
            return {
                ...state,
                prices: [action.payload]
            };
        default:
            return state
    }
}

export default rootReducer;