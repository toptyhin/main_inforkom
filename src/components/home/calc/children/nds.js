import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor:'white',
  borderRadius: '15px',
  marginTop: '60px',
  width: '70%',

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
        width: '50%',
        marginLeft: '1px',
    },
    '&:first-of-type': {
        borderRadius: '15px 0 0 15px',
        width: '50%',
    },
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
     '& .MuiToggleButtonGroup-grouped': {
         fontSize: '4.5vw',
      }
  },
  '@media (max-width: 900px)': {
     height: '8vw',
     '& .MuiToggleButtonGroup-grouped': {
        fontSize: '5vw',
      }
  },
  '@media (max-width: 500px)': {
     height: '12vw',
     '& .MuiToggleButtonGroup-grouped': {
        fontSize: '6vw',
        lineHeight: '6vw',
     }
  },
  '@media (max-width: 375px)': {
     height: '15vw',
     '& .MuiToggleButtonGroup-grouped': {
        fontSize: '7vw',
      }
  },
  '@media (max-width: 320px)': {
     height: '17vw',
     '& .MuiToggleButtonGroup-grouped': {
        fontSize: '8vw',
      }
  },
}));

function Nds(props) {
  const [value, setValue] = React.useState('true');
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };

  return (
    <StyledToggleButtonGroup value={value} exclusive
        onChange={handleChange} aria-label='nds' >
      <ToggleButton value='true' onClick={() => props.setNds(true)}>НДС</ToggleButton>
      <ToggleButton value='false' onClick={() => props.setNds(false)}>Без НДС</ToggleButton>
    </StyledToggleButtonGroup>
  );
}

export default Nds;
