import React from "react";
import "./About.css";
import Einstein from '../../../images/AlbertEinstein1.jpg';
import { CardsSection } from "./CardsSection.js";

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
                <div className="EncourageBox">
                <p >hiMath Gaming intends to improve(by revolution)
                    students eLearning experience by providing them the best conditions...
                </p>
                <img src={Einstein} alt="Einstein" width="275px" height="175px"></img>
            </div>
            </div>
            <CardsSection/>
        </div>
    </React.Fragment>
}
