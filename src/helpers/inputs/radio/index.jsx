/** @name Styled */
import { Radio } from './styled';
/** @name Dependencies */
import React from 'react';

export const InputRadio = React.memo((props) =>
    <Radio
        {...props}
        type="radio"
        className="form-check-input"
    />
)