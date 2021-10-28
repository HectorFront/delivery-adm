const flex = ({ wrap, direction, alignY, alignX }) => `
  display: flex;
  position: relative;
  flex-wrap: ${wrap ?? 'no-wrap'};
  align-items: ${alignY ?? 'start'};
  flex-direction: ${direction ?? 'row'};
  justify-content: ${alignX ?? 'start'};
`;

export { flex };