import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled }              from '@mui/material/styles';
import './slider.css'

const Calc = styled(Slider)( ({ theme }) => ({
  color: '#73aa37',
  height: '16px',
  borderRadius:4,
  boxShadow: `0px 0px 0px 0px!important`,
  padding: '2% 0!important',
  '&:focus, &.MuiSlider-dragging': {
      color: '#FBA834',
      '& .MuiSlider-thumb': {
          boxShadow: `0 0 0 0`,},
      },
  '& .MuiSlider-thumb': {
      boxShadow: `0px 0px 0px 0px`,
      height: '3.2vw',
      width: '3.2vw',
      backgroundColor: '#fff',
      border: '4px solid currentColor',
      '&:hover, &.Mui-focusVisible': {boxShadow: `0 0 0 0`,},
      '&:focus,  &.MuiSlider-dragging': {
          color: '#FBA834',
          boxShadow:
            '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0, 0, 0,0.02)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {},
      },
  },
  '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: 'unset',
      color: theme.palette.text.primary,
      '&:before': {
          display: 'none',
      },
      '& *': {
          background: 'transparent',
          color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
  },
  '& .MuiSlider-track': {
      border: 'none',
  },
  '& .MuiSlider-rail': {
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      marginTop: 15,
      height: 10,
      width: 1,
      '&.MuiSlider-markActive': {
          opacity: 1,
          backgroundColor: 'currentColor',
      },
  },
  '@media (min-width: 1921px)': {
     height: '23px',
     padding: '3% 0!important',
     '& .MuiSlider-mark': {
         marginTop: 23,
         height: 17,
         width: 2,
     }
  },
  '@media (max-width: 1100px)': {
     padding: '3% 0!important',

     '& .MuiSlider-thumb': {
       height: '4.4vw',
       width: '4.4vw',
     },
  },
  '@media (max-width: 900px)': {
    height: '2vw',
     '& .MuiSlider-thumb': {
       height: '5vw',
       width: '5vw',
     },
     '& .MuiSlider-mark': {
         height: 10,
      },
  },
  '@media (max-width: 500px)': {
    height: '3vw',
     '& .MuiSlider-thumb': {
       height: '8vw',
       width: '8vw',
     },
     '& .MuiSlider-mark': {
         height: 10,
      },
  },
}
));

function valueLabelFormat(value, unit) {
  const units = [unit];
  let unitIndex = 0;
  let Value = value;
  return `${Value} ${units[unitIndex]}`;
}

function CalcSlider({setSlider, header, unit, marks, ariaLabel, defaultValue, min,
                     step, max, valueLabelDisplay}) {
  const [value, setValue] = React.useState(defaultValue);
  const fuel = valueLabelFormat(value);
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
      setSlider(newValue);
    }
  };

  return (
    <div>
      <div className='CalcText'>
        <span className='flex-1 text-left'>{header}</span>
        <span className='CalcValue'>{valueLabelFormat(value,unit)}</span>
      </div>
      <Calc setSlider = {value}
          value = {value}
          aria-label = {ariaLabel}
          marks = {marks}
          min = {min}
          step = {step}
          max = {max}
          valueLabelDisplay = {valueLabelDisplay}
          getAriaValueText = {valueLabelFormat}
          valueLabelFormat = {valueLabelFormat}
          onChange = {handleChange}
      />
    </div>
  );
};

export default CalcSlider;
