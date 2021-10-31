import styled from 'styled-components';

const ButtonCustom = styled.button`
  height: 50px;
  padding: 0 40px;
  font-size: 15px;
  ${props => props.outline 
      ? `color: black;` 
      : ''
  };
  ${props => props.outline 
      ? `border: 3px solid ${process.env.REACT_APP_SECONDARY_COLOR};` 
      : 'border: 0;'
  };
  background-color: ${props => props.outline 
      ? 
      'white' 
      : props.secondary 
          ? process.env.REACT_APP_SECONDARY_COLOR 
          :  process.env.REACT_APP_DEFAULT_COLOR
  };
`;

export { ButtonCustom };