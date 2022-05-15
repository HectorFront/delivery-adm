/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {memo, useCallback, ElementType} from 'react';
/** @name Internal */
import {ModelStoreRegister} from 'modules/auth/register/model';
/** @name External */
import {String} from 'utils';
import {MaterialIcon} from 'helpers';

interface ProfileProps {
    type: string | null
    profile: string | null,
}

export const Profile: ElementType = memo(({ type = '', profile = '' }: ProfileProps): JSX.Element => {

    const isFacebook = type === 'facebook';

    /**
     * Open new window to social network of store
     */
    const redirectSocialNetwork = useCallback(() => {
        return ModelStoreRegister.visitSocialNetwork(type, profile);
    },[type, profile]);

    return (
        <S.Box>
            <S.Profile>
                <S.Avatar facebook={isFacebook}>
                    <MaterialIcon
                        size="18px"
                        color="white"
                        icon="restaurant"
                    />
                </S.Avatar>
                <S.InfoProfile>
                    <S.User facebook={isFacebook}>{!profile?.length ? 'sualoja' : profile}</S.User>
                    <S.Description>
                        Perfil do {String.capitalize(type ?? '')}&nbsp;
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
                facebook={isFacebook}
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