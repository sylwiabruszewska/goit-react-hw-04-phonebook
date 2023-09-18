import PropTypes from 'prop-types';

export const InputField = ({ label, children: input }) => {
  return (
    <label>
      {label}
      {input}
    </label>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
