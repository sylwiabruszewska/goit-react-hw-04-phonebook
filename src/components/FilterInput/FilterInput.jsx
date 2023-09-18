import PropTypes from 'prop-types';
import { StyledFilterInput } from './FilterInput.styled';

export const FilterInput = ({ value, onChange }) => {
  return (
    <StyledFilterInput
      type="text"
      name="filter"
      placeholder="Search by name"
      value={value}
      onChange={onChange}
    />
  );
};

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
