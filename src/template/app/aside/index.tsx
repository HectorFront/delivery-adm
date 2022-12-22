/** @name Styled */
import * as S from '../styles';
/** @name Images */
import LogoMedium from 'assets/logos/medium.svg';
/** @name Dependencies */
import {useLocation, matchPath} from 'react-router-dom';
import {Fragment, memo, ElementType, useCallback} from 'react';
/** @name Internal */
import {NAV_ITEMS} from "./constants";
/** @name External */
import {Render, MaterialIcon} from "components";
import Colors from 'layout/vars/colors';

interface AsideMenuProps {
}

interface NavItemsProps {
    [index: string]: any
}

/** @name Constants */
const CSS_NAMESPACE = {
    ITEM: 'nav-link d-flex align-items-center position-relative',
    ITEM_ACTIVE: 'nav__active__item'
};

export const AsideMenu: ElementType = memo((_props: AsideMenuProps): JSX.Element => {

    const location = useLocation();

    /**
     *
     * @param path
     * @returns boolean
     */
    const samePath = useCallback((path: string) => {
        return matchPath(path, { path: location.pathname });
    }, [location]);

    return (
        <S.Aside>
            <S.Header>
                <S.Logo
                    alt="Logo"
                    src={LogoMedium}
                />
                <S.NameCompany>Santa Fome Burger</S.NameCompany>
            </S.Header>
            <hr/>
            <S.MenuNav>
                {NAV_ITEMS.map((item: NavItemsProps, i: number) => {
                    const active = samePath(item.path);
                    return (
                        <Fragment key={i}>
                            {item.dividerNavs
                                ? <hr/> :
                                <S.NavItem>
                                    <span
                                        className={`${CSS_NAMESPACE.ITEM} ${active ? CSS_NAMESPACE.ITEM_ACTIVE : ''}`}
                                    >
                                        <MaterialIcon
                                            icon={item.icon}
                                            style={{ marginRight: 10 }}
                                            color={active ? 'white' : Colors.SECONDARY}
                                        />
                                        {item.name}&nbsp;
                                        {/*Temporary validation to add tag <new> in item*/}
                                        <Render has={i === 4}>
                                            <S.BadgeNew>novo</S.BadgeNew>
                                            <S.BadgeCounter>1</S.BadgeCounter>
                                        </Render>
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