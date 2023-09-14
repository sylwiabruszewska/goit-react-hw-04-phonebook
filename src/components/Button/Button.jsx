import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export function Button(props) {
  const {
    type = 'button',
    handler = null,
    children: text,
    customcolor,
  } = props;

  return (
    <StyledButton type={type} onClick={handler} $customcolor={customcolor}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func,
  customcolor: PropTypes.string,
};
