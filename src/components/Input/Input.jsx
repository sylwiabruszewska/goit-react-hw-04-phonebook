import { useState } from 'react';

import PropTypes from 'prop-types';
import { StyledInput, ErrorMessage } from './Input.styled';

export const Input = props => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    if (props.onChange) {
      props.onChange({
        inputName: props.name,
        inputValue: inputValue,
      });
    }
  };

  const isInputValueValid = () => {
    const pattern = props.pattern;
    const value = inputValue;

    const regExp = new RegExp(pattern);
    return regExp.test(value);
  };

  const { type, name, pattern, title, placeholder, required, value } = props;

  const isValid = value === '' || isInputValueValid();
  const inputClassName = value !== '' ? (isValid ? 'valid' : 'invalid') : '';

  return (
    <div>
      <StyledInput
        type={type}
        name={name}
        title={title}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        value={value}
        onChange={handleChange}
        className={inputClassName}
      />
      {!isValid ? <ErrorMessage>{title}</ErrorMessage> : null}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
