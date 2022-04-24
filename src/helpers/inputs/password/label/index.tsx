/** @name Styled */
import * as S from '../styles';
/** @name Dependencies */
import React, { useState } from 'react';
/** @name External */
import { Render, InputDefault, MaterialIcon } from 'helpers';
/** @name Constants */
import { ATTR_TYPES_PASSWORD } from '../constants';

type InputPasswordLabelProps = {
    label: string,
    error?: boolean
}

export const InputPasswordLabel: React.ElementType = React.memo(({ label, error, ...props }: InputPasswordLabelProps): JSX.Element => {
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
            <div className={!error && 'input-group'}>
                <InputDefault
                    {...props}
                    error={error}
                />
                <Render contains={!error}>
                    <S.VisibilityPassword
                        type="button"
                        className="btn"
                        onClick={handleTypePassword}
                    >
                        <MaterialIcon hover icon={icon} />
                    </S.VisibilityPassword>
                </Render>
            </div>
        </>
    )
});
