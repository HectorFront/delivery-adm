import styled from "styled-components";
/** @name Mixins */
import { flex } from "mixins/global";
/** @name Interface */
import { DropdownProps, TextProps } from "./stylesInterfaces";

export const Container = styled.div.attrs({
    className: 'dropdown mb-5'
})``;

export const Dropdown = styled.button.attrs({
    type: 'button',
    className: 'btn dropdown-toggle',
    'data-bs-toggle': 'dropdown',
    'aria-expanded': 'false'
})<DropdownProps>`
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  transition: all .2s;
  background-color: ${props => props.open ? '#3CB339' : '#bb2d3b'};
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'center' })};
  &:hover {
    opacity: .9;
    color: white;
    transition: all .2s;
  }
  &:focus {
    box-shadow: none;
  }
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

export const Text = styled.span<TextProps>`
  color: ${props => props.color ?? 'inherit'} !important;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => props.size ? `${props.size}px` : 'inherit'};
`;