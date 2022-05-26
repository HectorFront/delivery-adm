/** @name Styled */
import * as S from "modules/screens/auth/styles";
/** @name StyledKeyFrames */
import * as Keyframe from "modules/screens/auth/keyframes";
/** @name Dependencies */
import {memo, ElementType} from 'react';
/** @name External */
import {MaterialIcon} from "helpers";
import Colors from 'layout/vars/colors';

interface TabStepProps {
    icon: string,
    paintedText: string,
    normalText: string,
    description: string
}

export const TabStep: ElementType = memo(({ icon, paintedText, normalText, description }: TabStepProps): JSX.Element =>
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
, (prevProps, nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
        return true;
    }
});