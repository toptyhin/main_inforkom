import {createContext} from "react";

export const MapContext = createContext();

export const initialState = {
    activeFilters:[],
    activeProducts:[],
};

export const MapReducer = (state, action) => {
    
    const setFilter = () => {
        const payload = {...action.payload};
        let newStateFilters = state.activeFilters;
        let newStateProducts = state.activeProducts;
        if (payload.nextState) {
            newStateFilters.push(payload.id);
            newStateProducts = [...state.activeProducts, ...payload.products];
        } else {
            newStateFilters = state.activeFilters.filter(e => e !== payload.id);
            newStateProducts = state.activeProducts.filter(e => payload.products.indexOf(e) === -1 );
        }

        return {
            activeFilters: newStateFilters,
            activeProducts: newStateProducts
        }
    };
    
    switch(action.type) {
        case 'SET_FILTER':
            
            return {
                ...setFilter(),
                ...action.payload
            };
        default:
            return state
    }
};