import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const MapCalc = styled(Slider)( ({ theme }) => ({
  color: '#73aa37',
  height: '4px',
  borderRadius:4,
  boxShadow: `0px 0px 0px 0px!important`,
  padding: '2% 0!important',
  marginTop: '10px',
  '&:focus, &.MuiSlider-dragging': {
      color: '#FBA834',
      '& .MuiSlider-thumb': {
          boxShadow: `0 0 0 0`,},
      },
  '& .MuiSlider-thumb': {
      boxShadow: `0px 0px 0px 0px`,
      height: 'calc(1vw + 8px)',
      width: 'calc(1vw + 8px)',
      backgroundColor: '#fff',
      border: '4px solid currentColor',
      '&:hover, &.Mui-focusVisible': {boxShadow: `0 0 0 0`,},
      '&:focus,  &.MuiSlider-dragging': {
          color: '#FBA834',
          boxShadow:
            '0 0 0 rgb(0,0,0),0 0 0 rgb(0,0,0),0 0 0 0 rgb(0, 0, 0)',
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
}
));

function valueLabelFormat(value, unit) {
  const units = [unit];
  const unitIndex = 0;
  const Value = value;
  return `${Value} ${units[unitIndex]}`;
}

function MapCalcSlider({setslider, header, unit, marks, ariaLabel, getAriaLabel, defaultValue, min,
                     step, max, valueLabelDisplay}) {
  const [value, setValue] = React.useState(defaultValue);
  const fuel = valueLabelFormat(value);
  const handleChange = (event, newValue) => {
        setValue(newValue);
        setslider(newValue);

  };
  let showValue;
  if (value[1]) {
    showValue = value[0]+' - '+value[1];
  } else {
    showValue = value;
  }
  return (
    <div>
    <div className='map-header'>
      <span>{header}</span>
    </div>
    <MapCalc setslider = {value}
          value = {value}
          getAriaLabel = {getAriaLabel}
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
    <span className='map-p'>{valueLabelFormat(showValue,unit)}</span>
    </div>
  );
};

export default MapCalcSlider;
