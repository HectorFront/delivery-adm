/** @name Styled */
import * as S from '../styles';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { ModelStoreRegister } from 'modules/auth/register/model';
/** @name External */
import { String } from 'utils';
import { MaterialIcon } from 'helpers';

interface PreviewProfileProps {
    profile?: string | null,
    typeSocial?: string | null
}

export const PreviewProfile: React.ElementType = React.memo(({ typeSocial = '', profile = '' }: PreviewProfileProps): JSX.Element => {
    const HAS_TYPE_FACEBOOK = typeSocial === 'facebook';

    /**
     * Open new window to social network of store
     */
    const redirectSocialNetwork = React.useCallback(() => {
        return ModelStoreRegister.visitSocialNetwork(typeSocial, profile);
    },[typeSocial, profile]);

    return (
        <S.Box>
            <S.Profile>
                <S.Avatar facebook={HAS_TYPE_FACEBOOK}>
                    <MaterialIcon
                        size="18px"
                        color="white"
                        icon="restaurant"
                    />
                </S.Avatar>
                <S.InfoProfile>
                    <S.User facebook={HAS_TYPE_FACEBOOK}>{!profile?.length ? 'sualoja' : profile}</S.User>
                    <S.Description>
                        Perfil do {String.capitalize(typeSocial ?? '')}&nbsp;
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
                facebook={HAS_TYPE_FACEBOOK}
                onClick={redirectSocialNetwork}
            >
                Ver perfil
            </S.ViewPage>
        </S.Box>
    )
});