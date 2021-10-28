/** @name Styled */
import styled from 'styled-components';
/** @name Images */
import SVGShapes from 'assets/svg/shapes.svg';
import Background from 'assets/backgrounds/food_login.jpg';
/** @name External */
import { flex } from 'mixins/global';

const Form = styled.form`
  width: 100%;
`;

const DescriptionLogin = styled.span`
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

const TextLogin = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'center' })}
`;

const TitleLogin = styled.h1`
  width: 100%;
  font-weight: bold;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'start' })}
`;

const ContainerLogin = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 100%;
  background-image: url(${Background});
`;

const ContentForm = styled.div`
  width: 35%;
  height: 100%;
  padding: 90px;
  overflow-x: hidden;
  background-image: url(${SVGShapes});
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'center' })};

  @media(max-width: 1720px) {
    padding: 30px;
  }

  @media(max-width: 1510px) {
    width: 100%;
    padding: 90px;
  }

  @media(max-width: 720px) {
    width: 100%;
    padding: 30px;
  }
`;

export {
    Form,
    Link,
    TextLogin,
    TitleLogin,
    ContentForm,
    RegisterStore,
    ContainerLogin,
    DescriptionLogin
};