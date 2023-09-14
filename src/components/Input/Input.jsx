import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledInput, ErrorMessage } from './Input.styled';

export class Input extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({ value: inputValue });

    if (this.props.onChange) {
      this.props.onChange({
        inputName: this.props.name,
        inputValue: inputValue,
      });
    }
  };

  isInputValueValid() {
    const pattern = this.props.pattern;
    const value = this.state.value;

    const regExp = new RegExp(pattern);
    return regExp.test(value);
  }

  render() {
    const { type, name, pattern, title, placeholder, required, value } =
      this.props;

    const isValid = value === '' || this.isInputValueValid();
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
          onChange={this.handleChange}
          className={inputClassName}
        />
        {!isValid ? <ErrorMessage>{title}</ErrorMessage> : null}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
