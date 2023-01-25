import {createContext} from "react";

export const MapContext = createContext();

export const initialState = {
    activeFilters:[],
    activeProducts:[],
    geoPosition: null,
    routePoints:[]
};

export const MapReducer = (state, action) => {
    
    const setFilter = () => {
        const payload = {...action.payload};
        let newStateFilters = [];
        let newStateProducts = [];
        if (payload.nextState) {
            newStateFilters.push(payload.id);
            newStateProducts = [...state.activeProducts, ...payload.products];
        } else {
            newStateFilters = [...state.activeFilters].filter(e => e !== payload.id);
            newStateProducts = [...state.activeProducts].filter(e => payload.products.indexOf(e) === -1 );
        }

        return { ...state,
            activeFilters: newStateFilters,
            activeProducts: newStateProducts
        }
    };

    const setPosition = () => {
        const payload = {...action.payload};
        return { ...state,
            geoPosition: payload
        }        
    };

    const setRoutePoints = () => {
        const payload = {...action.payload};
        const newPoints = [...state.routePoints]
        const hasStep = p => newPoints.filter(el => el.step === p.step).length > 0;
        const addPoint = rec => {
           if (!hasStep(rec)) {
                return [...newPoints, rec];
           } else {
                return newPoints.map(el => el.step === rec.step ? rec : el)

           }
        }
       
        if (!newPoints.length) {
            return { ...state,
                routePoints: [payload]
            }  
        } else {
            return { ...state,
                routePoints: addPoint(payload)
            }              
        }
    };
    
    switch(action.type) {
        case 'SET_FILTER':
            return setFilter();
        case 'SET_POSITION':
            return setPosition()
        case 'SET_ROUTE':
            return setRoutePoints()            
        default:
            return state
    }
};