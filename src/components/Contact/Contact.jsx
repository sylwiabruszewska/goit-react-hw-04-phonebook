import PropTypes from 'prop-types';

import { StyledItem, StyledBox, StyledIcon } from './Contact.styled';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../index';

export function Contact({ id, name, number, handleDelete }) {
  return (
    <StyledItem>
      <StyledBox>
        <StyledIcon icon={faUser} />
        <span>{name}</span>
      </StyledBox>

      <StyledBox>
        <StyledIcon icon={faPhone} />
        <span>{number}</span>
      </StyledBox>
      <Button
        type="button"
        handler={() => handleDelete(id)}
        customcolor="tomato"
      >
        Delete
      </Button>
    </StyledItem>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
