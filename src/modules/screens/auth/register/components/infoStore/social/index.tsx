/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, useCallback, ElementType} from 'react';
/** @name Internal */
import {ModelStoreRegister} from 'modules/screens/auth/register/model';
/** @name External */
import {FormatString} from 'utils';
import {MaterialIcon} from "components";

interface ProfileProps {
    type: string | null
    profile: string | null,
}

export const Profile: ElementType = memo(({ type = '', profile = '' }: ProfileProps): JSX.Element => {

    /**
     * Open new window to social network of store
     */
    const redirectSocialNetwork = () => {
        return ModelStoreRegister.visitSocialNetwork(type, profile);
    };

    return (
        <S.Box>
            <S.Profile>
                <S.Avatar social={type}>
                    <MaterialIcon
                        size="18px"
                        color="white"
                        icon="restaurant"
                    />
                </S.Avatar>
                <S.InfoProfile>
                    <S.User social={type}>{!profile?.length ? 'sualoja' : profile}</S.User>
                    <S.Description>
                        Perfil do {FormatString.capitalize(type)}&nbsp;
                        <MaterialIcon
                            size="10px"
                            color="gray"
                            icon="public"
                        />
                    </S.Description>
                </S.InfoProfile>
            </S.Profile>
            <S.ViewPage
                type="button"
                social={type}
                onClick={redirectSocialNetwork}
            >
                Ver perfil
            </S.ViewPage>
        </S.Box>
    )
}, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});