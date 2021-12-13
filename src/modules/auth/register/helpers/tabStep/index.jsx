/** @name Styled */
import { Title, Description } from "../../../styled";
/** @name StyledKeyFrames */
import { TextAnimation } from "../../../keyframes";
/** @name Dependencies */
import React from 'react';
/** @name External */
import { MaterialIcon } from "helpers";
/** @name Constants */
import Colors from 'constants/client/colors';

export const TabStep = React.memo(({ icon, paintedText, normalText, description }) =>
    <>
        <Title>
            <MaterialIcon
                icon={icon}
                color={Colors.SECONDARY}
            />
            <TextAnimation seconds="1" color={Colors.SECONDARY}>{paintedText}</TextAnimation>&nbsp;{normalText}
        </Title>
        <Description>{description}</Description>
    </>
)