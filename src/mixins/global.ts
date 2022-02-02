interface flexProps {
    wrap: string,
    direction: string,
    alignY: string,
    alignX: string
}

const flex: Function = ({ wrap, direction, alignY, alignX }: flexProps): string => `
  display: flex;
  position: relative;
  flex-wrap: ${wrap ?? 'no-wrap'};
  align-items: ${alignY ?? 'start'};
  flex-direction: ${direction ?? 'row'};
  justify-content: ${alignX ?? 'start'};
`;

export { flex };