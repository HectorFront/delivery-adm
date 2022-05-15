/** @name Styled */
import * as S from '../styles';
/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Dependencies */
import {matchPath} from 'react-router-dom';
import {Fragment, memo, ElementType, useCallback} from 'react';
/** @name Internal */
import {NAV_ITEMS} from "./constants";
/** @name External */
import {MaterialIcon} from "helpers";
import Colors from 'constants/client/colors';

interface AsideMenuProps {
    location: {
        pathname: string
    }
}

interface NavItemsProps {
    [index: string]: any
}

export const AsideMenu: ElementType = memo((props: AsideMenuProps): JSX.Element => {

    /**
     *
     * @param path
     * @returns boolean
     */
    const hasSamePath = useCallback((path: string) => {
        return matchPath(path, { path: props.location.pathname });
    }, [props.location]);

    return (
        <S.Aside>
            <S.Header>
                <S.Logo
                    alt="Logo"
                    height="50px"
                    src={LogoDefault}
                />
                <S.NameCompany>Santa Fome Burger</S.NameCompany>
            </S.Header>
            <hr/>
            <S.MenuNav>
                {NAV_ITEMS.map((item: NavItemsProps, i: number) => {
                    const ITEM_ACTIVE = hasSamePath(item.path);
                    return (
                        <Fragment key={i}>
                            {item.dividerNavs
                                ? <br/>
                                :
                                <S.NavItem>
                                    <span
                                        className={`nav-link d-flex align-items-center ${ITEM_ACTIVE && 'nav__active__item'} position-relative`}
                                    >
                                        <MaterialIcon
                                            icon={item.icon}
                                            style={{ marginRight: 10 }}
                                            color={ITEM_ACTIVE ? 'white' : Colors.SECONDARY}
                                        />
                                        {item.name}&nbsp;
                                        {(i === 2 || i === 4 || i === NAV_ITEMS.length-1) && // 'Temporary validation to add tag <New> in item'
                                            <>
                                                <S.BadgeNew>novo</S.BadgeNew>
                                                <S.BadgeCounter>1</S.BadgeCounter>
                                            </>
                                        }
                                    </span>
                                </S.NavItem>
                            }
                        </Fragment>
                    )
                })}
            </S.MenuNav>
            <S.Version>v1.0.0</S.Version>
        </S.Aside>
    );
});