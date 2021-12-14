/** @name Styled */
import { Aside, NavItem } from '../styled';
/** @name Dependencies */
import React from 'react';
/** @name Internal */
import { navItems } from "./constants";
/** @name External */
import { MaterialIcon } from "helpers";

export const AsideMenu = React.memo(() =>
    <Aside>
        <ul className="nav flex-column">
            {navItems.map(item =>
                <NavItem>
                    <MaterialIcon icon={item.icon} color="#676867" />&nbsp;{item.name}
                </NavItem>
            )}
        </ul>
    </Aside>
);