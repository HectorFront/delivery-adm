/** @name Styled */
import { Box, Avatar, Profile, User, Description, ViewPage, InfoProfile } from '../styled';
/** @name Dependencies */
import React from 'react';
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
                <Description>Página do facebook</Description>
            </InfoProfile>
        </Profile>
        <ViewPage facebook>Ver página</ViewPage>
    </Box>
);