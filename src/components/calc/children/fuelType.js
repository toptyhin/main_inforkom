import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor:'white',
  borderRadius: '15px',
  marginTop: '60px',
  height: '80px',

  '& .MuiToggleButtonGroup-grouped': {
      fontSize: '3vw',
      fontFamily: 'montserrat-extra-bold',
      color: '#c4c4c4',
      borderColor: '#e5e7eb',

      '&.Mui-selected:hover': {
          backgroundColor:'#73aa37',
      },
      '&.Mui-selected': {
          backgroundColor:'#73aa37',
          color: 'white',
      },
      '&.Mui-disabled': {
          backgroundColor:'white',
      },
      '&:last-of-type': {
          borderRadius: '0 15px 15px 0',
          minWidth: '15px!important',
      },
      '&:first-of-type': {
          borderRadius: '15px 0 0 15px',
          minWidth: '15px',
      },
  },
}));

function FuelType(props) {
  const [value, setValue] = React.useState('dt');
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };
  return (
    <StyledToggleButtonGroup
        value={value}
        fullWidth
        exclusive
        onChange={handleChange}
        aria-label='fueltype'
    >
        <ToggleButton value='dt' onClick={() => props.setFuelType('dt')}>ДТ</ToggleButton>
        <ToggleButton value='petrol' onClick={() => props.setFuelType("petrol")}>Бензин</ToggleButton>
        <ToggleButton value='gaz' onClick={() => props.setFuelType("gaz")}>Газ</ToggleButton>
    </StyledToggleButtonGroup>
  );
}
export default FuelType;
