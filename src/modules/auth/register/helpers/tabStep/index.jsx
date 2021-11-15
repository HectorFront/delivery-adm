/** @name Styled */
import { Title, Description } from "../../../styled";
/** @name StyledKeyFrames */
import { TextAnimation } from "../../../keyframes";
/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name External */
import { MaterialIcon } from "helpers";

export const TabStep = React.memo(({ icon, paintedText, normalText, description }) =>
    <Fragment>
        <Title>
            <MaterialIcon
                icon={icon}
                color={process.env.REACT_APP_SECONDARY_COLOR}
            />
            <TextAnimation seconds="1" color={process.env.REACT_APP_SECONDARY_COLOR}>{paintedText}</TextAnimation>&nbsp;{normalText}
        </Title>
        <Description>{description}</Description>
    </Fragment>
)