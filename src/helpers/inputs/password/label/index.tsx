/** @name Styled */
import * as S from '../styles';
/** @name Dependencies */
import React, { useState } from 'react';
/** @name External */
import { InputDefault, MaterialIcon } from 'helpers/index';
/** @name Constants */
import { ATTR_TYPES_PASSWORD } from '../constants';

type InputPasswordLabelProps = {
    label: string
}

export const InputPasswordLabel: React.ElementType = React.memo(({ label, ...props }: InputPasswordLabelProps): JSX.Element => {
    const [icon, setIcon] = useState<string>(ATTR_TYPES_PASSWORD.text.icon);
    const [typeCurrent, setTypeAttr] = useState<string>(ATTR_TYPES_PASSWORD.text.type);

    const handleTypePassword: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIcon(ATTR_TYPES_PASSWORD[typeCurrent].icon);
        setTypeAttr(ATTR_TYPES_PASSWORD[typeCurrent].type);
    }

    return (
        <>
            <label className="form-label">
                <b>{label}</b>
            </label>
            <div className="input-group">
                <InputDefault
                    {...props}
                />
                <S.VisibilityPassword
                    type="button"
                    className="btn"
                    onClick={handleTypePassword}
                >
                    <MaterialIcon hover icon={icon} />
                </S.VisibilityPassword>
            </div>
        </>
    )
});
