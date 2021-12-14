/** @name Styled */
import styled from 'styled-components';

export const AppContainer = styled.div`
  height: auto;
  min-height: 100%;
`;

export const Aside = styled.aside`
  top: 0;
  left: 0;
  width: 250px;
  z-index: 810;
  min-height: 100%;
  position: absolute;
  background-color: #f2f2f2;
`;

export const NavItem = styled.li.attrs({
    className: 'nav-item d-flex align-items-center p-3 ps-4'
})`
  color: #676867;
  font-weight: bold;
`;