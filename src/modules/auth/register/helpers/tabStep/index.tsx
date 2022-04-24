/** @name Styled */
import * as S from "../../../styles";
/** @name StyledKeyFrames */
import * as Keyframe from "../../../keyframes";
/** @name Dependencies */
import React from 'react';
/** @name External */
import { MaterialIcon } from "helpers";
import Colors from 'constants/client/colors';

interface TabStepProps {
    icon: string,
    paintedText: string,
    normalText: string,
    description: string
}

export const TabStep: React.ElementType = React.memo(({ icon, paintedText, normalText, description }: TabStepProps): JSX.Element =>
    <>
        <S.Title>
            <MaterialIcon
                icon={icon}
                color={Colors.SECONDARY}
            />
            <Keyframe.TextFade seconds="1" color={Colors.SECONDARY}>{paintedText}</Keyframe.TextFade>&nbsp;{normalText}
        </S.Title>
        <S.Description>{description}</S.Description>
    </>
)