/** @name Styled */
import { VisibilityPassword } from '../styled';
/** @name Dependencies */
import React from 'react';
import { InputDefault } from 'helpers';

export const InputPasswordLabel = React.memo(({ label, type = 'password', size = 'md', icon, className, placeholder, handleType }) =>
    <>
        <label className="form-label">
            <b>{label}</b>
        </label>
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
    </>
);
