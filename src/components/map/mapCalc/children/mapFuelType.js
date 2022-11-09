import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({

  borderRadius: '15px',
  height: '50px',

  '& .MuiToggleButtonGroup-grouped': {
      fontSize: '17px',
      fontFamily: 'montserrat-extra-bold',

      '&.MuiToggleButton-root': {
        border: '0px!important',
          backgroundColor:'#f1efef',
          borderRadius: '12px',
          margin: '0 10px',
      },
      '&.Mui-selected:hover': {
          backgroundColor:'#d27a33',
      },
      '&.Mui-selected': {
          backgroundColor:'#d27a33!important',
          color: 'white',
      },
      '&.Mui-disabled': {
      },
      '&:last-of-type': {
          marginRight: 0,
      },
      '&:first-of-type': {

          marginLeft: 0,
      },
  },
}));

function MapFuelType(props) {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {

      setValue(newValue);

  };
  return (
    <div>
      <p className='map-p map-p-margin'>{props.children}</p>
      <StyledToggleButtonGroup
        value={value}
        fullWidth
        exclusive
        onChange={handleChange}
        aria-label='fuel'
      >
        <ToggleButton value='1' onClick={() => props.setFuel('1')}>1</ToggleButton>
        <ToggleButton value='2' onClick={() => props.setFuel("2")}>2</ToggleButton>
        <ToggleButton value='3' onClick={() => props.setFuel("3")}>3</ToggleButton>
        <ToggleButton value='4' onClick={() => props.setFuel("4")}>4</ToggleButton>
        <ToggleButton value='5+' onClick={() => props.setFuel("5+")}>5+</ToggleButton>
      </StyledToggleButtonGroup>
     </div>
  );
}
export default MapFuelType;
