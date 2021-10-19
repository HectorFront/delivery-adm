import Background from 'assets/backgrounds/food_login.jfif';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
`;

const ForgotPassword = styled.div`
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    opacity: .6;
    transition: all .2s;
  }
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
  display: flex;
  padding: 90px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  
  @media(max-width: 1150px) {
    width: 100%;
  }
`;

export { Form, ContentForm, ForgotPassword, ContainerLogin };