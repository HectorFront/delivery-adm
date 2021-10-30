import styled from 'styled-components';

const Input = styled.input`
  color: #5e5e5e;
  border: 2px solid ${process.env.REACT_APP_DEFAULT_COLOR};

  &:focus {
    color: #5e5e5e;
    border-color: ${process.env.REACT_APP_DARK_COLOR};
    box-shadow: 0 0 5px 0 ${process.env.REACT_APP_DEFAULT_COLOR};
  }

  &::placeholder {
    color: #a0a0a0;
    font-size: 16px;
    padding-left: 8px;
  }
`;

const Invalid = styled.div.attrs(props => ({
    className: 'invalid-feedback',
}))``;

export { Input, Invalid };