/** @name Styled */
import { Box, Avatar, Profile, User, Description, ViewPage, InfoProfile } from '../styled';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { StorageStoreRegister } from 'modules/auth/register/storage';
/** @name External */
import { MaterialIcon } from 'helpers';

export const PreviewFacebook = React.memo(({ facebook }) =>
    <Box>
        <Profile>
            <Avatar facebook>
                <MaterialIcon
                    size="18px"
                    color="white"
                    icon="restaurant"
                />
            </Avatar>
            <InfoProfile>
                <User facebook>{!facebook?.length ? 'sualoja' : facebook}</User>
                <Description>
                    Página do facebook&nbsp;
                    <MaterialIcon
                        size="10px"
                        color="gray"
                        icon="public"
                    />
                </Description>
            </InfoProfile>
        </Profile>
        <ViewPage
            facebook
            type="button"
            onClick={() => StorageStoreRegister.visitSocialNetwork('facebook', facebook ?? '')}
        >
            Ver página
        </ViewPage>
    </Box>
);