import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';

export function Section({ title, children }) {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <div>{children}</div>
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
