import React from "react";
import style from "./About.css";

export const About = () => {
    return <React.Fragment>
        <div className={'about'}>
            <div className={'about_header'}>
                <div className={'about_header_strip'}>
                    <div/>
                </div>
                <span className={'about_header_title'}>About</span>
            </div>
            <div className={'about_body'}>
                <span className={'about_title'}>
                    About hiMath Gaming Mission
                </span>
                <span className={'about_subtitle'}>
                    Your best teacher is YOU!
                </span>
            </div>
        </div>
    </React.Fragment>
}
