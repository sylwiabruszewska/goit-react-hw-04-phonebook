import PropTypes from 'prop-types';
import { StyledFilterInput } from './FilterInput.styled';

export function FilterInput({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <StyledFilterInput
        type="text"
        name="filter"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
