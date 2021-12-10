/** @name Styled */
import { Box, Avatar, Profile, User, Description, ViewPage, InfoProfile } from '../styled';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { StorageStoreRegister } from 'modules/auth/register/storage';
/** @name External */
import { String } from 'utils';
import { MaterialIcon } from 'helpers';

export const PreviewProfile = React.memo(({ typeSocial, profile }) => {
    const hasTypeFacebook = typeSocial === 'facebook';
    return (
        <Box>
            <Profile>
                <Avatar facebook={hasTypeFacebook}>
                    <MaterialIcon
                        size="18px"
                        color="white"
                        icon="restaurant"
                    />
                </Avatar>
                <InfoProfile>
                    <User facebook={hasTypeFacebook}>{!profile?.length ? 'sualoja' : profile}</User>
                    <Description>
                        Perfil do {String.capitalize(typeSocial)}&nbsp;
                        <MaterialIcon
                            size="10px"
                            color="gray"
                            icon="public"
                        />
                    </Description>
                </InfoProfile>
            </Profile>
            <ViewPage
                type="button"
                facebook={hasTypeFacebook}
                onClick={() => StorageStoreRegister.visitSocialNetwork(typeSocial, profile ?? '')}
            >
                Ver perfil
            </ViewPage>
        </Box>
    )
});