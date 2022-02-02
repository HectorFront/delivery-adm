/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import { flex } from 'mixins/global';
/** @name Constants */
import Colors from 'constants/client/colors';
/** @name Interface */
import { AvatarProps, UserProps, ViewPageProps } from "./interfaces";

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

export const Avatar = styled.div<AvatarProps>`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'center' })}
  background-color: ${props => props.facebook 
          ? Colors.BG_FACEBOOK
          : Colors.MAIN_INSTAGRAM
  };
`;

export const InfoProfile = styled.div`
  margin-left: 8px;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'start' })}
`;

export const User = styled.span<UserProps>`
  width: 100%;
  font-size: 14px;
  ${props => props.facebook ? `font-weight: bold; letter-spacing: 1px;` : ''};
`;

export const Description = styled.span`
  color: gray;
  width: 100%;
  font-size: 11px;
`;

export const ViewPage = styled.button<ViewPageProps>`
  border: 0;
  color: white;
  width: 100px;
  height: 30px;
  font-size: 13px;
  border-radius: 5px;
  background-color: ${props => props.facebook 
          ? Colors.BG_FACEBOOK
          : Colors.BG_INSTAGRAM
  };
  &:hover {
    opacity: .8;
  }
`;