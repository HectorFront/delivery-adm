/** @name Styled */
import * as S from '../styles';
/** @name Dependencies */
import React, { useState } from 'react';
/** @name External */
import { InputDefault, MaterialIcon } from 'helpers/index';
/** @name Constants */
import { AttrTypePassword } from '../constants';

interface InputPasswordLabelProps {
    id?: string,
    label: string,
    size?: string,
    value?: string,
    error?: boolean,
    className?: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const InputPasswordLabel: Function = React.memo((props: InputPasswordLabelProps): JSX.Element => {
    const [icon, setIcon] = useState<string>(AttrTypePassword.text.icon);
    const [typeCurrent, setTypeAttr] = useState<string>(AttrTypePassword.text.typeAttr);

    const handleTypePassword: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIcon(AttrTypePassword[typeCurrent].icon);
        setTypeAttr(AttrTypePassword[typeCurrent].typeAttr);
    }

    return (
        <>
            <label className="form-label">
                <b>{props.label}</b>
            </label>
            <div className="input-group">
                <InputDefault
                    id={props.id}
                    size={props.size}
                    type={typeCurrent}
                    error={props.error}
                    value={props.value}
                    onChange={props.onChange}
                    className={props.className}
                    placeholder={props.placeholder}
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
