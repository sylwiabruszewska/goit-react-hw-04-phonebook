import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledItem = styled.li`
  font-size: 16px;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;

  & div {
    width: 50%;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #71a3ff;
  margin-right: 10px;
`;
