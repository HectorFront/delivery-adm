/** @name Styled */
import { VisibilityPassword } from "./styled";
/** @name Dependencies */
import React from 'react';
import { InputDefault } from "helpers";

export const InputPassword = React.memo(({ type = 'password', size = 'md', icon, className, placeholder, handleType }) =>
    <div className="input-group">
        <InputDefault
            type={type}
            placeholder={placeholder}
            className={`form-control form-control-${size}${className ? ` ${className}` : ''}`}
        />
        <VisibilityPassword onClick={handleType} className="btn" type="button">
            {icon}
        </VisibilityPassword>
    </div>
);
