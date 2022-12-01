import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor:'white',
  borderRadius: '15px',
  marginTop: '60px',

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
      '@media (max-width: 1920px)': {
         height: '6vw',
         fontSize: '3.5vw',
      },
      '@media (min-width: 1921px)': {
         height: '100px',
         '& .MuiToggleButtonGroup-grouped': {
             fontSize: '70px',
          }
      },
      '@media (max-width: 1100px)': {
         height: '7vw',
         fontSize: '4.5vw',
      },
      '@media (max-width: 900px)': {
         height: '8vw',
         fontSize: '5vw',
      },
      '@media (max-width: 500px)': {
         height: '12vw',
         fontSize: '6vw',
      },
      '@media (max-width: 375px)': {
         height: '15vw',
         fontSize: '7vw',
      },
      '@media (max-width: 320px)': {
         height: '17vw',
         fontSize: '8vw',
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
    <StyledToggleButtonGroup value={value} fullWidth exclusive
        onChange={handleChange} aria-label='fueltype'>
      <ToggleButton value='dt' onClick={() => props.setFuelType('dt')}>ДТ</ToggleButton>
      <ToggleButton value='petrol' onClick={() => props.setFuelType('petrol')}>Бензин</ToggleButton>
      <ToggleButton value='gaz' onClick={() => props.setFuelType('gaz')}>Газ</ToggleButton>
    </StyledToggleButtonGroup>
  );
}

export default FuelType;
