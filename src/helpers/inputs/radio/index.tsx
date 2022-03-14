/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React from 'react';

interface InputRadioProps {
    id?: string,
    value?: number,
    checked?: boolean,
    secondary?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const InputRadio: Function = React.memo((props: InputRadioProps): JSX.Element =>
    <S.Radio
        id={props.id}
        type="radio"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        secondary={props.secondary}
        className="form-check-input"
    />
)