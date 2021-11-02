/** @name Styled */
import { Label } from './styled';
import React from 'react';
/** @name External */
import { Render, MaterialIcon, InputDefault } from 'helpers';

export const InputLabel = React.memo((props) =>
    <>
        <Label className="form-label">
            <Render has={props.iconLabel}>
                <MaterialIcon
                    size="15px"
                    icon={props.iconLabel}
                    color={process.env.REACT_APP_SECONDARY_COLOR}
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
            {...props}
        />
    </>
);

