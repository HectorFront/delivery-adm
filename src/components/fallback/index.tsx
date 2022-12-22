/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styled */
import * as S from './styles';
/** @name Dependencies */
import {ElementType, memo} from "react";

export const LoaderFallback: ElementType = memo((_props) =>
    <S.Container>
        <div className="spinner-border text-dark" role="status"/>
    </S.Container>
)