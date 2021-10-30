/** @name Styled */
import styled from 'styled-components';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { flex } from 'mixins/global';

const Form = styled.form`
  width: 100%;
`;

const Title = styled.h1`
  width: 100%;
  font-weight: bold;
`;

const BarProgress = styled.div`
  height: 5px;
  width: ${props => props.width};
  background-color: ${process.env.REACT_APP_DEFAULT_COLOR};
`;

const BackPage = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px;
  position: relative;
  background-color: white;
  border-bottom: 5px solid #e0e0e0;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'start' })}
`;

const Description = styled.span`
  width: 100%;
  font-size: 16px;
`;

const Link = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${process.env.REACT_APP_DEFAULT_COLOR};
  &:hover {
    opacity: .7;
    transition: .2s;
  }
`;

const RegisterStore = styled.span`
  width: 100%;
  margin-top: 50px;
  font-weight: bold;
  text-align: center;
`;

const ContainerText = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'center' })}
`;

const ContainerForm = styled.div`
  width: 100%;
  height: 90%;
  padding: 90px;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'center' })};

  @media(max-width: 1720px) {
    padding: 30px;
  }

  @media(max-width: 1510px) {
    padding: 90px;
  }

  @media(max-width: 720px) {
    padding: 30px;
  }
`;

export {
    Form,
    Link,
    Title,
    BackPage,
    Description,
    BarProgress,
    ContainerText,
    RegisterStore,
    ContainerForm
};