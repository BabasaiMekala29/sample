import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';

export default function DigitInput({ length }){
  const [values, setValues] = useState(new Array(length).fill(''));

  const handleChange = (e, index) => {
    const { value } = e.target;
    // Allow only digits
    if (/^\d?$/.test(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      // Move focus to the next input
      if (value && index < length - 1) {
        const nextInput = document.getElementById(`digit-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      const prevInput = document.getElementById(`digit-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {values.map((digit, index) => (
        <TextField
          key={index}
          id={`digit-${index}`}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
          sx={{ width: '3rem' }}
        />
      ))}
    </Box>
  );
};
