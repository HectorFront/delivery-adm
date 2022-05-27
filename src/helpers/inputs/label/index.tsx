/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, ElementType} from 'react';
/** @name External */
import {Render, MaterialIcon, InputDefault} from 'helpers';
import Colors from 'layout/vars/colors';

type InputLabelProps = {
    label: string,
    iconLabel?: string,
    iconLabelImg?: string,
}

export const InputLabel: ElementType = memo(({ label, iconLabel = '', iconLabelImg, ...props }: InputLabelProps): JSX.Element =>
    <>
        <S.Label className="form-label">
            <Render contains={iconLabel}>
                <MaterialIcon
                    size="15px"
                    icon={iconLabel}
                    color={Colors.SECONDARY}
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

