/** @name Styled */
import styled from 'styled-components';
/** @name Images */
import SVGShapes from 'assets/svg/shapes.svg';
import Background from 'assets/backgrounds/food_login.jpg';

const ContainerAuth = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 100%;
  background-image: url(${Background});
`;

const Content = styled.div`
  width: 35%;
  height: 100%;
  overflow-x: hidden;
  background-image: url(${SVGShapes});

  @media(max-width: 1510px) {
    width: 100%;
  }
`;

export {
    Content,
    ContainerAuth
};