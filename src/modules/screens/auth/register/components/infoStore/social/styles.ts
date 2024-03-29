/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import { flex } from 'layout/mixins/styles';
/** @name External */
import Colors from 'layout/vars/colors';
import * as Interface from "./styles.interfaces";

export const Box = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 2px;
  border-radius: 3px;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'space-between' })}
`;

export const Profile = styled.div`
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'space-between' })}
`;

export const Avatar = styled.div<Interface.AvatarProps>`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'center' })}
  background-color: ${props => Colors[props.social.toUpperCase()]};
`;

export const InfoProfile = styled.div`
  margin-left: 8px;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'start' })}
`;

export const User = styled.span<Interface.UserProps>`
  width: 100%;
  font-size: 14px;
`;

export const Description = styled.span`
  color: gray;
  width: 100%;
  font-size: 11px;
`;

export const ViewPage = styled.button<Interface.ViewPageProps>`
  border: 0;
  color: white;
  width: 100px;
  height: 30px;
  font-size: 13px;
  border-radius: 5px;
  background-color: ${props => Colors[props.social.toUpperCase()]};
  &:hover {
    opacity: .8;
  }
`;