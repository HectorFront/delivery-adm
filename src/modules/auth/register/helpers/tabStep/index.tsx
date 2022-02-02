/** @name Styled */
import { Title, Description } from "../../../styles";
/** @name StyledKeyFrames */
import { TextAnimation } from "../../../keyframes";
/** @name Dependencies */
import React from 'react';
/** @name External */
import { MaterialIcon } from "helpers";
/** @name Constants */
import Colors from 'constants/client/colors';

interface TabStepProps {
    icon: string,
    paintedText: string,
    normalText: string,
    description: string
}

export const TabStep: Function = React.memo(({ icon, paintedText, normalText, description }: TabStepProps): JSX.Element =>
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