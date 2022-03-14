/** @name Styled */
import * as S from '../styles';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { StorageStoreRegister } from 'modules/auth/register/storage';
/** @name External */
import { String } from 'utils';
import { MaterialIcon } from 'helpers';

interface PreviewProfileProps {
    profile?: string | null,
    typeSocial?: string | null
}

export const PreviewProfile: Function = React.memo(({ typeSocial, profile }: PreviewProfileProps): JSX.Element => {
    const hasTypeFacebook = typeSocial === 'facebook';
    return (
        <S.Box>
            <S.Profile>
                <S.Avatar facebook={hasTypeFacebook}>
                    <MaterialIcon
                        size="18px"
                        color="white"
                        icon="restaurant"
                    />
                </S.Avatar>
                <S.InfoProfile>
                    <S.User facebook={hasTypeFacebook}>{!profile?.length ? 'sualoja' : profile}</S.User>
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
                facebook={hasTypeFacebook}
                onClick={() => StorageStoreRegister.visitSocialNetwork(typeSocial ?? '', profile ?? '')}
            >
                Ver perfil
            </S.ViewPage>
        </S.Box>
    )
});