/** @name Styled */
import styled from 'styled-components';
/** @name Constants */
import Colors from 'constants/client/colors';

const WIDTH_ASIDE = 270;

export const AppContainer = styled.div`
  height: auto;
  min-height: 100%;
`;

export const Logo = styled.img`
  width: auto;
`;

export const Aside = styled.aside.attrs({
    className: 'd-flex flex-column flex-shrink-0 p-3 pt-4'
})`
  top: 0;
  left: 0;
  width: ${WIDTH_ASIDE}px;
  z-index: 810;
  min-height: 100%;
  position: absolute;
  background-color: #f2f2f2;
`;

export const Header = styled.div.attrs({
    className: 'd-flex align-items-center justify-content-center flex-column'
})``;

export const NameCompany = styled.div.attrs({
    className: 'mt-3'
})`
  width: 100%;
  overflow: hidden;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MenuNav = styled.ul.attrs({
    className: 'nav nav-pills flex-column mb-auto'
})``;

export const NavItem = styled.li.attrs({
    className: 'nav-item mb-2'
})`
  cursor: pointer;

  & > span {
    color: #727272;
    transition: all .2s;

    &:hover {
      transition: all .2s;
      transform: scale(1.1);
      color: ${Colors.DEFAULT};
      background-color: #dcdcdc;
    }

    &.nav__active__item {
      color: white;
      border-left: 4px solid ${Colors.LIGHT};
      background-color: ${Colors.DEFAULT};

      &:hover {
        background-color: ${Colors.DARK};
      }
    }
  }
`;

export const BadgeNew = styled.div.attrs({
    className: 'badge rounded-pill'
})`
  color: #f00;
  font-size: 9px;
  font-weight: normal;
  border: 1px solid #f00;
  text-transform: uppercase;
  background-color: transparent;
`;

export const BadgeCounter = styled.div.attrs({
    className: 'badge position-absolute top-0 border-light rounded-circle d-flex align-items-center'
})`
  left: 6px;
  height: auto;
  font-size: 9px;
  padding: 3px 5px;
  background-color: ${Colors.DARK};
`;

export const Version = styled.div.attrs({
    className: 'd-flex justify-content-center p-3'
})`
  color: #c5c5c5;
`;

export const ContentWrapper = styled.div`
  padding: 50px;
  min-height: 100%;
  margin-left: ${WIDTH_ASIDE}px;
`;