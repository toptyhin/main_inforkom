import React, {useContext} from "react";
import FilterButton from "./filterButton";
import { MapContext } from "../../../../reducer";
import {v4 as uuidv4} from 'uuid';

const ProductFilter = ({products}) => {

    const {state, dispatch} = useContext(MapContext);

    let buttons = [];

    const isActive = id => {
        return state.activeFilters.indexOf(id) !== -1;
    };

    products.map(group=>{
        group.map(e=>{
            if (e.catId !== 401207) {
            // skip services - take only products
            buttons.push(<FilterButton 
                                key={uuidv4()}
                                name={e.group} 
                                active={isActive(e.id)}
                                handle = {()=>{
                                    dispatch({
                                        type: 'SET_FILTER',
                                        payload: {
                                            id: e.id,
                                            nextState:!isActive(e.id),
                                            products: e.products
                                        }
                                    })                                    
                                }}
                            />);
            }
      });
    });
    return <div key={uuidv4()} style={{width:'100%', display: 'flex', position:'absolute',top:250, left:400}}>{buttons}</div>
  };

  export default ProductFilter;