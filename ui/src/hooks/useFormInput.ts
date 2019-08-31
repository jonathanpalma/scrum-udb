import React, { useState } from 'react';
import { FormControlProps } from 'react-bootstrap';

export default function useFormInput(initialValue: any = '') {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.FormEvent<FormControlProps>) => {
    let target = e.target as HTMLInputElement;
    setValue(target.type === 'number' ? parseInt(target.value) : target.value);
  };
  return {
    value,
    onChange,
  };
}
