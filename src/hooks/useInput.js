import { useState } from 'react';

const useInput = ({ type }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    type,
    onChange,
  };
};

export default useInput;
