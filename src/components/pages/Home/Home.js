
import React from "react";
import "./Home.css";
import VideoApp from "./VideoApp";
// import Back from "./BackgroudVideo/backgroundVideo";

export const Home = () => {
    return <React.Fragment>
        {/* <Back/> */}
        <div className={'home'}>
            <div className={'home_container'}>
                <div className={'home_title1'}>
                    <span className={'home_title2'}>hiMath Gaming</span>
                    <span className={'home_subtitle'}>Revolutionize eLearning</span>
               <VideoApp/>
                </div>
            </div>
        </div>
    </React.Fragment>
}