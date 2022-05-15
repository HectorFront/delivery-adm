type flexProps = {
    wrap: string,
    direction: string,
    alignY: string,
    alignX: string
}

export const flex: Function = ({wrap = 'no-wrap', direction = 'row', alignY = 'start', alignX = 'start'}: flexProps): string => `
  display: flex;
  position: relative;
  flex-wrap: ${wrap};
  align-items: ${alignY};
  flex-direction: ${direction};
  justify-content: ${alignX};
`;