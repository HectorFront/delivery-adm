/** @name Styled */
import { Logo, Aside, Header, NameCompany, MenuNav, NavItem, BadgeNew, BadgeCounter, Version } from '../styles';
/** @name Images */
import LogoDefault from 'assets/logos/default.svg';
/** @name Dependencies */
import React, { Fragment } from 'react';
/** @name Internal */
import { navItems } from "./constants";
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
        <Aside>
            <Header>
                <Logo
                    alt="Logo"
                    height="50px"
                    src={LogoDefault}
                />
                <NameCompany>Santa Fome Burger</NameCompany>
            </Header>
            <hr/>
            <MenuNav>
                {navItems.map((item: NavItemsProps, i: number) => {
                    const active = activeNav(item.path);
                    return (
                        <Fragment key={i}>
                            {item.dividerNavs
                                ? <br/>
                                :
                                <NavItem>
                                    <span
                                        className={`nav-link d-flex align-items-center ${active && 'nav__active__item'} position-relative`}
                                    >
                                        <MaterialIcon
                                            icon={item.icon}
                                            style={{ marginRight: 10 }}
                                            color={active ? 'white' : Colors.SECONDARY}
                                        />
                                        {item.name}&nbsp;
                                        {(i === 2 || i === 4 || i === navItems.length-1) &&
                                            <>
                                                <BadgeNew>novo</BadgeNew>
                                                <BadgeCounter>1</BadgeCounter>
                                            </>
                                        }
                                    </span>
                                </NavItem>
                            }
                        </Fragment>
                    )
                })}
            </MenuNav>
            <Version>v1.0.0</Version>
        </Aside>
    );
});