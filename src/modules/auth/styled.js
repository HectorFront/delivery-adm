/** @name Styled */
import styled from 'styled-components';
/** @name Dependencies */
import React from 'react';
/** @name Mixins */
import { flex } from 'mixins/global';

const Center = styled.div`
  height: 100%;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'center' })}
`;

const Logo = styled.img`
  width: auto;
`;

const Form = styled.form`
  width: 100%;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 2em;
  font-weight: bold;
`;

const ContainerBarProgress = styled.div`
  width: 100%;
  height: 5px;
  background-color: #e0e0e0;
`;

const BarProgress = styled.div`
  height: 100%;
  position: relative;
  width: ${props => props.width};
  background-color: ${process.env.REACT_APP_DEFAULT_COLOR};
`;

const BackPage = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  position: relative;
  background-color: white;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center' })}
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
  height: auto;
  padding: 38px 50px;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'center' })};

  @media(max-width: 720px) {
    padding: 30px;
  }
`;

export {
    Form,
    Link,
    Logo,
    Title,
    Center,
    BackPage,
    Description,
    BarProgress,
    ContainerText,
    RegisterStore,
    ContainerForm,
    ContainerBarProgress
};