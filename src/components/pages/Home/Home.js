import React from "react";
import style from "./Home.css";

export const Home = () => {
    return <React.Fragment>
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.home__title}>
                    <span className={style.title}>hiMath Gaming</span>
                    <span className={style.subtitle}>Revolutionize Learning</span>
                </div>
            </div>
        </div>
    </React.Fragment>
}
