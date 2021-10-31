/** @name Styled */
import {Box, Avatar, Profile, User, Description, ViewPage, InfoProfile } from '../styled';
/** @name Dependencies */
import React from 'react';
/** @name External */
import { MaterialIcon } from 'helpers';

export const PreviewInstagram = React.memo(({ instagram }) =>
    <Box>
        <Profile>
            <Avatar instagram>
                <MaterialIcon
                    size="18px"
                    color="white"
                    icon="restaurant"
                />
            </Avatar>
            <InfoProfile>
                <User instagram>{!instagram?.length ? 'sualoja' : instagram}</User>
                <Description>Perfil do Instagram</Description>
            </InfoProfile>
        </Profile>
        <ViewPage instagram>Ver perfil</ViewPage>
    </Box>
);