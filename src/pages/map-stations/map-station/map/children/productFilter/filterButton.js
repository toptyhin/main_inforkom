import React from "react";

const FilterButton = ({name,handle,active}) => {
    const activeBG = active ? '#d27a33' : '#dedede';
    return (
        <div 
            onClick={handle} 
            style={{cursor:'pointer', margin:5, width:50,height:40, color:'#FFFFFF',backgroundColor:activeBG}}>
            {name}
        </div>
    )
};

export default FilterButton;