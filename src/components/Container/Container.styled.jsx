import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #fff;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  color: #313131;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  min-width: 300px;
  width: 90%;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;
