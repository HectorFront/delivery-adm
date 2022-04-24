/** @name Styled */
import styled from 'styled-components';
/** @name Images */
import SVGShapes from 'assets/backgrounds/svg/shapes.svg';
import Background from 'assets/backgrounds/bg_auth.jpg';

export const ContainerAuth = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 100%;
  background-image: url(${Background});
`;

export const Content = styled.div`
  width: 45%;
  height: 100%;
  overflow-x: hidden;
  background-image: url(${SVGShapes});
  @media(max-width: 1510px) {
    width: 100%;
  }
`;