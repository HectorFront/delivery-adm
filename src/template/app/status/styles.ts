import styled from "styled-components";
/** @name Mixins */
import { flex } from "layout/mixins/styles";

import * as Interface from "./styles.interfaces";

export const Container = styled.div.attrs({
    className: 'dropdown mb-5'
})``;

export const Dropdown = styled.button.attrs({
    type: 'button',
    className: 'btn dropdown-toggle',
    'data-bs-toggle': 'dropdown',
    'aria-expanded': 'false'
})`
  color: white;
  font-weight: bold;
  padding: 0 15px 0 0;
  border-radius: 50px;
  transition: all .2s;
  border: 1px solid #C4C4C4;
  ${flex({wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'center'})};
  &:after {
    color: #949494;
    font-size: 18px;
    margin-left: 10px;
  }
  &:hover {
    opacity: .9;
    color: white;
    transition: all .2s;
  }
  &:focus {
    box-shadow: none;
  }
`;

export const TextDropdown = styled.div<Interface.TextDropdownProps>`
  height: 100%;
  font-size: 18px;
  border-radius: 50px;
  padding: 6px 20px 6px 30px;
  background-color: ${props => props.open ? '#63CD61' : '#bb2d3b'};
  ${flex({wrap: 'nowrap', direction: 'row', alignX: 'center', alignY: 'center'})};
`;

export const List = styled.ul.attrs({
  className: "dropdown-menu"
})``;

export const Item = styled.li.attrs({
  className: "dropdown-item"
})`
  cursor: pointer;
  ${flex({wrap: 'nowrap', direction: 'row', alignX: 'start', alignY: 'start'})};
  &:active {
    color: inherit;
    background-color: #e9ecef;
  }
`;

export const Text = styled.span<Interface.TextProps>`
  color: ${props => props.color ?? 'inherit'} !important;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => props.size ? `${props.size}px` : 'inherit'};
`;