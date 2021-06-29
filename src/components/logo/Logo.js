import React from "react";
import {NavLink} from "react-router-dom";
import style from './Logo.css'

export const Logo = () => {
    return <React.Fragment>
        <NavLink>
            <div className={style.logo__company}>
                <span className={style.logo__company_title}>hiMath</span>
                <span className={style.logo__company_subtitle}>Gaming</span>
            </div>
        </NavLink>
    </React.Fragment>
}
