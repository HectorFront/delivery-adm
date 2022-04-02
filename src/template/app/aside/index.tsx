/** @name Styled */
import * as S from '../styles';
/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name Internal */
import {NAV_ITEMS} from "./constants";
/** @name External */
import { MaterialIcon } from "helpers";
/** @name Constants */
import Colors from 'constants/client/colors';

interface AsideMenuProps {
    pathCurrent: string
}

interface NavItemsProps {
    [index: string]: any
}

export const AsideMenu: Function = React.memo((props: AsideMenuProps): JSX.Element => {
    const activeNav: Function = (pathNav: string) => pathNav === props.pathCurrent;
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
                    const active = activeNav(item.path);
                    return (
                        <Fragment key={i}>
                            {item.dividerNavs
                                ? <br/>
                                :
                                <S.NavItem>
                                    <span
                                        className={`nav-link d-flex align-items-center ${active && 'nav__active__item'} position-relative`}
                                    >
                                        <MaterialIcon
                                            icon={item.icon}
                                            style={{ marginRight: 10 }}
                                            color={active ? 'white' : Colors.SECONDARY}
                                        />
                                        {item.name}&nbsp;
                                        {(i === 2 || i === 4 || i === NAV_ITEMS.length-1) &&
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