import styled from 'styled-components';

const VisibilityPassword = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${process.env.REACT_APP_DARK_COLOR};
  border: 1px solid ${process.env.REACT_APP_DEFAULT_COLOR};
  border-left: 0;
  &:hover {
    opacity: .7;
    color: ${process.env.REACT_APP_DEFAULT_COLOR};
  }
  &:focus {
    border-color: ${process.env.REACT_APP_DARK_COLOR};
    box-shadow:  0 0 5px 0 ${process.env.REACT_APP_DEFAULT_COLOR};
  }
`;

export { VisibilityPassword };