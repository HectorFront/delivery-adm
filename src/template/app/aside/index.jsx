/** @name Styled */
import { Logo, Aside, Header, NameCompany, MenuNav, NavItem, BadgeNew, BadgeCounter, Version } from '../styled';
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

export const AsideMenu = React.memo((props) => {
    const activeNav = pathNav => pathNav === props.pathCurrent;
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
                {navItems.map((item, i) => {
                    const active = activeNav(item.path);
                    return (
                        <Fragment key={i}>
                            {item.dividerNavs
                                ?
                                <br/>
                                :
                                <NavItem>
                                    <span className={`nav-link d-flex align-items-center ${active && 'nav__active__item'} position-relative`}>
                                        <MaterialIcon icon={item.icon} color={active ? 'white' : Colors.SECONDARY} style={{ marginRight: 10 }} />{item.name}&nbsp;
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