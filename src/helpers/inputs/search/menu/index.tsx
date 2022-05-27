/** @name Styled */
import * as S from "./styles";
/** @name Dependencies */
import {memo, ElementType} from 'react';
/** @name External */
import Colors from "layout/vars/colors";
import {MaterialIcon} from "helpers/icon";

type InputSearchProps = {
    error?: boolean | undefined,
    className?: string | undefined
}

/** @name Constants */
const CSS_NAMESPACE = 'form-control';

export const InputMenuSearch: ElementType = memo(({error = false, className = '', ...props}: InputSearchProps): JSX.Element => {

    const errorClassname: string = error ? ' is-invalid' : '';
    const customClassName: string = className ? ` ${className}` : '';

    const defineCSSNameSpace: string = `${CSS_NAMESPACE}${customClassName}${errorClassname}`;
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <MaterialIcon
                size={25}
                icon={'search'}
                color={Colors.DEFAULT}
                style={{ position: 'absolute', top: 23, left: 20 }}
            />
            <S.Search
                {...props}
                className={defineCSSNameSpace}
            />
            <S.Invalid>Preencha o campo corretamente.</S.Invalid>
        </div>
    );
});