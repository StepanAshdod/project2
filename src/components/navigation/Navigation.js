import React from "react";
import {NavLink} from "react-router-dom";
import {navigationLinks} from "../../service/apiConst";
import './Navigation.css'

export const Navigation = () => {
    return (
        <main className="nav">
            { navigationLinks.map( ( item ) => (
                <React.Fragment key={ item.path }>
                    <NavLink to={ item.path }>
                        <button  className="nav_link_btn" key={ item.label }>
                            { item.label }
                        </button>
                    </NavLink>
                </React.Fragment>
            ) ) }
        </main>
    )
}
