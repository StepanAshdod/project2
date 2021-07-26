import React from "react";
import {NavLink} from "react-router-dom";
import {navigationLinks} from "../../service/apiConst";
import './Navigation.css';
// import logo from '../../images/LOGOBLACK.png';
import logo from '../../images/LOGOhiDucation.png';

export const Navigation = () => {
    return (
        <div className="nav">
            <div className="LogoWrapper">
            {/* <div className="LogoImg" onclick="window.location.href='Home.js'"></div> */}
            <a href="/home"><img src={logo} alt="logo"/></a>
            </div>
            { navigationLinks.map( ( item ) => (
                <React.Fragment key={ item.path }>
                    <NavLink to={ item.path }>
                        <button  className="nav_link_btn" key={ item.label }>
                            { item.label }
                        </button>
                    </NavLink>
                </React.Fragment>
            ) ) }
        </div>
    )
}