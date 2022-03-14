/** @name Dependencies */
import styled from 'styled-components';
/** @name External */
import { flex } from 'mixins/global';
/** @name Images */
import ImgRealTime from './assets/backgrounds/real_time.png';
/** @name Interface */
import { InfoFloatingProps, ContentProps, TextProps } from "./stylesInterfaces";

export const Container = styled.div`
  padding: 20px;
  transition: all .2s;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 0 5px 0 gray;
  ${flex({ wrap: 'wrap', direction: 'row', alignX: 'space-between', alignY: 'center' })};
  @media screen and (max-width: 1000px) {
    padding: 10px;
  }
`;

export const RealTime = styled.div<InfoFloatingProps>`
  width: 100%;
  left: -50px;
  height: 100%;
  color: white;
  padding: 30px;
  border-radius: 7px;
  transition: all .2s;
  position: absolute;
  background-image: url(${ImgRealTime});
  background-size: cover;
  ${flex({ wrap: 'nowrap', direction: 'column', alignX: 'start', alignY: 'start' })};
  @media screen and (max-width: 1000px) { 
    left: 0;
  }
`;

export const Title = styled.h1`
  color: inherit;
  font-size: 20px;
  text-align: start;
`;

export const Text = styled.span<TextProps>`
  color: ${props => props.color ?? 'inherit'} !important;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => props.size ? `${props.size}px` : 'inherit'};
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  margin-top: 25px;
  ${flex({ wrap: 'nowrap', direction: 'column', alignX: 'start', alignY: 'start' })};
  @media screen and (max-width: 1000px) {
    padding: 15px;
  }
`;