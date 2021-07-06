import React from "react";
import {NavLink} from "react-router-dom";
import {navigationLinks} from "../../service/apiConst";
import './Navigation.css'

export const Navigation = () => {
    return (
        <div className="nav">
            <div className="LogoWrapper">
            { <div className="LogoImg" onclick="window.location.href='Home.js'"></div> }
            <a href="home"><img classname="LogoImg" src="../../images/hiDucation.jpg" alt="logo"/></a>
            <div className="LogoText">
                <h2 className="hiMath">hiMath</h2>
                <h2 className="Gaming">Gaming</h2>
            </div>
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
