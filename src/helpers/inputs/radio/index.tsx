/** @name Styled */
import { Radio } from './styled';
/** @name Dependencies */
import React from 'react';

interface InputRadioProps {
    id: string,
    value: number,
    checked: boolean,
    onChange: Function
}

export const InputRadio = React.memo((props: InputRadioProps) =>
    <Radio
        id={props.id}
        type="radio"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        className="form-check-input"
    />
)