/** @name Styled */
import { VisibilityPassword } from '../styles';
/** @name Dependencies */
import React, { useState } from 'react';
/** @name External */
import { InputDefault, MaterialIcon } from 'helpers/index';
/** @name Constants */
import { AttrTypePassword } from "../constants";

interface InputPasswordProps {
    id?: string,
    size?: string,
    value?: string,
    error?: boolean,
    className?: string,
    placeholder?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const InputPassword: Function = React.memo((props: InputPasswordProps): JSX.Element => {
    const [icon, setIcon] = useState<string>(AttrTypePassword.password.icon);
    const [typeCurrent, setTypeAttr] = useState<string>(AttrTypePassword.password.typeAttr);

    const handleTypePassword: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIcon(AttrTypePassword[typeCurrent].icon);
        setTypeAttr(AttrTypePassword[typeCurrent].typeAttr);
    }

    return (
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
            <VisibilityPassword
                type="button"
                className="btn"
                onClick={handleTypePassword}
            >
                <MaterialIcon hover icon={icon} />
            </VisibilityPassword>
        </div>
    );
});
