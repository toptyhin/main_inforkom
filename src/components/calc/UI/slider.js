import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const Shadow =
  '0 3px 1px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.13), 0 0 0 1px rgba(0,0,0,0.02)';

const Calc = styled(Slider)( ({ theme }) => ({
  color: "#73aa37",
  height: 13,
  borderRadius:4,
  padding: '15px 0',
  '&:focus, &.MuiSlider-dragging': {color: "#FBA834",},
  '& .MuiSlider-thumb': {
    boxShadow: `0px 0px 0px 0px`,
    height: 45,
    width: 45,
    backgroundColor: '#fff',
    border: '5px solid currentColor',
    '&:hover, &.Mui-focusVisible': {
      boxShadow: Shadow,
    },
    '&:focus,  &.MuiSlider-dragging': {
      color: "#FBA834",
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: Shadow,
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

function valueLabelFormat(value, unit) {
  const units = [unit];
  let unitIndex = 0;
  let Value = value;
  return `${Value} ${units[unitIndex]}`;
}

function CalcSlider({header, unit, marks, ariaLabel, defaultValue, min,
                     step, max, valueLabelDisplay}) {
  let CalcValue = {
    color: "#636363",
    fontSize: "1.8vw",
    fontWeight: "bold",
  }
  let CalcText = {
    display: "flex",
    marginTop: "5vw",
    alignItems: "center",
    fontSize: "1.5vw",
    fontFamily: "myriadpro-regular",
    color: "#a1a1a1",
  }
  const [value, setValue] = React.useState(defaultValue);
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
        setValue(newValue);
    }
  };

  return (
    <div>
    <div style={CalcText}>
      <span className="flex-1 text-left">{header}</span>
      <span style={CalcValue}>{valueLabelFormat(value,unit)}</span>
    </div>
    <Calc value = {value}
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
