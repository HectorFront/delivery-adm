/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { Render, MaterialIcon, InputDefault } from 'helpers/index';
import Colors from 'constants/client/colors';

type InputLabelProps = {
    label: string,
    iconLabel?: string,
    iconLabelImg?: string,
}

export const InputLabel: React.ElementType = React.memo(({ label, iconLabel, iconLabelImg ,...props }: InputLabelProps): JSX.Element =>
    <>
        <S.Label className="form-label">
            <Render contains={iconLabel}>
                <MaterialIcon
                    size="15px"
                    color={Colors.SECONDARY}
                    icon={iconLabel ?? ''}
                />&nbsp;
            </Render>
            <Render contains={iconLabelImg}>
                <img
                    width="auto"
                    height="15px"
                    alt="Icon label"
                    src={iconLabelImg}
                />&nbsp;
            </Render>
            <b>{label}</b>
        </S.Label>
        <InputDefault
            {...props}
        />
    </>
);

