import { TYPES } from "../actions/deudoresActions";

export const deudoresInitialState = {
    beers: [

    ],
    deudor: []
};

export function deudoresReducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_TABLE: {

        }
        case TYPES.REMOVE_ONE_FROM_TABLE: {
            
        }
        case TYPES.REMOVE_ALL_FROM_TABLE: {
            
        }
        case TYPES.CLEAR_DEUDA: {
            
        }
        default:
            return state;
    }
}