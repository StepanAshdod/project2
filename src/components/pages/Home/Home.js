import React from "react";
import style from "./Home.css";
import VideoApp from "./VideoApp";

export const Home = () => {
    return <React.Fragment>
        <div className={'home'}>
            <div className={'home_container'}>
                <div className={'home_title1'}>
                    <span className={'home_title2'}>hiMath Gaming</span>
                    <span className={'home_subtitle'}>Revolutionize Learning</span>
                    <VideoApp/>
                </div>
            </div>
        </div>
    </React.Fragment>
}
