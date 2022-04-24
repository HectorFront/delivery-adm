/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React from 'react';

type InputRadioProps = {
    secondary?: boolean,
}

export const InputRadio: React.ElementType = React.memo(({ secondary, ...props }: InputRadioProps): JSX.Element =>
    <S.Radio
        {...props}
        type="radio"
        secondary={secondary}
        className="form-check-input"
    />
)