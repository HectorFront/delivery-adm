/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { MaterialIcon } from "helpers/icon";

interface RestaurantStatusProps {
    statusToggle: boolean | null
}

interface StatusProps {
    [key: string]: {
        icon: string,
        status: string,
        action: {
            color: string,
            text: string,
            icon: string
        }
    }
}

const STATUS: StatusProps = {
    open: {
        icon: 'door_front',
        status: 'Aberto',
        action: {
            text: 'Fechar',
            color: 'red',
            icon: 'lock_reset'
        }
    },
    closed: {
        icon: 'lock_clock',
        status: 'Fechado',
        action: {
            text: 'Abrir',
            color: 'green',
            icon: 'key'
        }
    }
}

export const RestaurantStatus: React.ElementType = React.memo(({ statusToggle }: RestaurantStatusProps): JSX.Element => {
    const COLLECT_TOGGLE_STATUS = statusToggle ? 'open' : 'closed';
    const { action: { color, icon: iconAction, text }, status, icon: iconStatus } = STATUS[COLLECT_TOGGLE_STATUS];
    return (
        <S.Container>
            <S.Dropdown>
                <S.TextDropdown open={statusToggle}>
                    {status}&nbsp;<MaterialIcon icon={iconStatus} pointer size={15} />&nbsp;&nbsp;
                </S.TextDropdown>
            </S.Dropdown>
            <S.List>
                <S.Item>
                    <MaterialIcon icon={iconAction} color={color}/>&nbsp;
                    <S.Text>{text} restaurante</S.Text>
                </S.Item>
            </S.List>
        </S.Container>
    );
});