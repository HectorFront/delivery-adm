/** @name Dependencies */
import styled from 'styled-components';
/** @name External */
import { flex } from 'mixins/global';
/** @name Constants */
import Colors from 'constants/client/colors';
/** @name Interface */
import { InfoFloatingProps, ContentProps, TextProps } from "./stylesInterfaces";

export const Container = styled.div`
  padding: 20px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 0 5px 0 gray;
  ${flex({ wrap: 'wrap', direction: 'row', alignX: 'space-between', alignY: 'center' })};
`;

export const RealTime = styled.div<InfoFloatingProps>`
  left: -50px;
  height: 100%;
  color: white;
  padding: 30px;
  border-radius: 7px;
  position: absolute;
  background-color: ${Colors.TERTIARY};
  width: calc(${props => props.width}px / 1.8);
  ${flex({ wrap: 'nowrap', direction: 'column', alignX: 'start', alignY: 'start' })}
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
  width: auto;
  padding: 30px;
  ${flex({ wrap: 'nowrap', direction: 'column', alignX: 'start', alignY: 'start' })}
`;