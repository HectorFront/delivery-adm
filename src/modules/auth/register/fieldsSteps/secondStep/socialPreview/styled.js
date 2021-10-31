/** @name Styled */
import styled from 'styled-components';
import { flex } from 'mixins/global';

const Box = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 2px;
  border-radius: 3px;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'space-between' })}
`;

const Profile = styled.div`
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'space-between' })}
`;

const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'center' })}
  background-color: ${props => props.facebook 
          ? process.env.REACT_APP_FACEBOOK_BACKGROUND_COLOR 
          : process.env.REACT_APP_INSTAGRAM_MAIN_COLOR
  };
`;

const InfoProfile = styled.div`
  margin-left: 8px;
  ${flex({ wrap: 'no-wrap', direction: 'column', alignY: 'center', alignX: 'start' })}
`;

const User = styled.span`
  width: 100%;
  font-size: 14px;
  ${props => props.facebook ? `font-weight: bold; letter-spacing: 1px;` : ''};
`;

const Description = styled.span`
  color: gray;
  width: 100%;
  font-size: 11px;
`;

const ViewPage = styled.button`
  border: 0;
  color: white;
  width: 100px;
  height: 30px;
  font-size: 13px;
  border-radius: 5px;
  background-color: ${props => props.facebook 
          ? process.env.REACT_APP_FACEBOOK_BACKGROUND_COLOR 
          : process.env.REACT_APP_INSTAGRAM_BACKGROUND_COLOR
  };
`;

export {
    Box,
    User,
    Avatar,
    Profile,
    ViewPage,
    InfoProfile,
    Description
};