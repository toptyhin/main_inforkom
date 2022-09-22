import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const Calc = styled(Slider)(({ theme }) => ({
  color: "#73aa37",
  height: 13,
  borderRadius:4,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 45,
    width: 45,
    backgroundColor: '#fff',
    border: '5px solid currentColor',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
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
}
));

const CalcSlider =
({marks, ariaLabel, defaultValue, min, step, max,  valueLabelDisplay}) => {
  return (
    <div>
      <Calc
      defaultValue={defaultValue}
      aria-label={ariaLabel}
      marks={marks}
      min=  {min}
      step= {step}
      max=  {max}
      valueLabelDisplay={valueLabelDisplay}
      />


    </div>
  );
};
export default CalcSlider;
