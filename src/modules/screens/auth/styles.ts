/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import { flex } from 'layout/mixins/styles';
/** @name External */
import Colors from 'layout/vars/colors';

import * as Interface from "./styles.interfaces";

export const Center = styled.div`
  height: 100%;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'center' })};
`;

export const Logo = styled.img`
  width: auto;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 2em;
  font-weight: bold;
`;

export const ContainerBarProgress = styled.div`
  width: 100%;
  height: 5px;
  background-color: #e0e0e0;
`;

export const BarProgress = styled.div<Interface.BarProgressProps>`
  height: 100%;
  position: relative;
  width: ${props => props.width};
  background-color: ${Colors.DEFAULT};
`;

export const BackPage = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  position: relative;
  background-color: white;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'center' })}
`;

export const CountSteps = styled.span`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.span`
  width: 100%;
  font-size: 16px;
`;

export const Link = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${Colors.DEFAULT};
  &:hover {
    opacity: .7;
    transition: .2s;
  }
`;

export const RegisterStore = styled.span`
  width: 100%;
  margin-top: 50px;
  font-weight: bold;
  text-align: center;
`;

export const ContainerText = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'center' })}
`;

export const ContainerForm = styled.div`
  width: 100%;
  height: auto;
  padding: 38px 100px;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'center' })};

  @media(max-width: 720px) {
    padding: 30px;
  }
`;