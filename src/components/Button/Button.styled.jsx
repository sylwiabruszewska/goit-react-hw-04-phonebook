import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 5px;
  width: 100px;
  cursor: pointer;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #dddddd;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  color: #666666;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $customcolor }) => $customcolor || '#71a3ff'};
    color: #fff;
  }

  &.button-delete:hover {
    background-color: tomato;
  }
`;
