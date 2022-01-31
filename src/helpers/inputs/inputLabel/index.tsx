/** @name Styled */
import { Label } from './styled';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { Render, MaterialIcon, InputDefault } from 'helpers';
/** @name Constants */
import Colors from 'constants/client/colors';

interface InputLabelProps {
    label: string,
    size?: string,
    type?: string,
    error?: boolean,
    className?: string,
    iconLabel?: string,
    placeholder?: string,
    iconLabelImg?: string
}

export const InputLabel = React.memo((props: InputLabelProps) =>
    <>
        <Label className="form-label">
            <Render has={props.iconLabel}>
                <MaterialIcon
                    size="15px"
                    color={Colors.SECONDARY}
                    icon={props.iconLabel ?? ''}
                />&nbsp;
            </Render>
            <Render has={props.iconLabelImg}>
                <img
                    width="auto"
                    height="15px"
                    alt="Icon label"
                    src={props.iconLabelImg}
                />&nbsp;
            </Render>
            <b>{props.label}</b>
        </Label>
        <InputDefault
            size={props.size}
            type={props.type}
            error={props.error}
            className={props.className}
            placeholder={props.placeholder}
        />
    </>
);

