/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { Render, MaterialIcon, InputDefault } from 'helpers/index';
/** @name Constants */
import Colors from 'constants/client/colors';

interface InputLabelProps {
    id?: string,
    label: string,
    size?: string,
    type?: string,
    value?: string,
    error?: boolean,
    className?: string,
    iconLabel?: string,
    placeholder?: string,
    iconLabelImg?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const InputLabel: Function = React.memo((props: InputLabelProps): JSX.Element =>
    <>
        <S.Label className="form-label">
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
        </S.Label>
        <InputDefault
            id={props.id}
            size={props.size}
            type={props.type}
            error={props.error}
            value={props.value}
            onChange={props.onChange}
            className={props.className}
            placeholder={props.placeholder}
        />
    </>
);

