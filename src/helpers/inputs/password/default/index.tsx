/** @name Styled */
import { VisibilityPassword } from '../styled';
/** @name Dependencies */
import React, { useState } from 'react';
/** @name External */
import { InputDefault, MaterialIcon } from 'helpers';
/** @name Constants */
import { AttrTypePassword } from "../typesInput";

interface InputPasswordProps {
    size?: string,
    error?: boolean,
    className?: string,
    placeholder?: string,
}

export const InputPassword = React.memo((props: InputPasswordProps) => {
    const [icon, setIcon] = useState(AttrTypePassword.password.icon);
    const [typeCurrent, setTypeAttr] = useState(AttrTypePassword.password.typeAttr);

    const handleTypePassword = () => {
        setIcon(AttrTypePassword[typeCurrent].icon);
        setTypeAttr(AttrTypePassword[typeCurrent].typeAttr);
    }

    return (
        <div className="input-group">
            <InputDefault
                size={props.size}
                type={typeCurrent}
                error={props.error}
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
