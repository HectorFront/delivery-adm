/** @name Dependencies */
import {Link} from "react-router-dom";
import {ElementType, memo, ReactNode} from "react";
/** @name Internal */
import * as S from "./styles";
/** @name External */
import {MaterialIcon} from 'helpers/index';
import Colors from 'layout/vars/colors';

type DropdownProps = {
    icon?: string,
    text?: string,
    size?: string,
    children: ReactNode
}

export const Dropdown: ElementType = memo(({icon, size = 'md', text, children, ...props}: DropdownProps): JSX.Element =>
    <div className="btn-group">
        <S.Button
            {...props}
            type="button"
            aria-expanded={false}
            data-bs-toggle="dropdown"
            className={`btn btn-${size} dropdown-toggle`}
        >
            {icon && <MaterialIcon icon={icon} color={Colors.DEFAULT}/>}&nbsp;{text && text}
        </S.Button>
        <ul className="dropdown-menu">
            {children}
        </ul>
    </div>
);

type DropdownItemProps = {
    path: string,
    children: ReactNode
}

export const DropdownItem: ElementType = memo(({children, path = '/home', ...props}: DropdownItemProps) =>
    <Link to={path}>
        <S.Item
            {...props}
            className="dropdown-item"
        >
            <span>{children}</span>
        </S.Item>
    </Link>
);