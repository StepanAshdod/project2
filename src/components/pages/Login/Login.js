import React from "react";
import style from "./Login.css";

export const Login = () => {

    return <React.Fragment>
        <div className={style.login}>
            <div className={style.login__header}>
                <div className={style.login__header_strip}>
                    <div />
                </div>
                <span className={style.login__header_title}>Login</span>
            </div>
            <div className={style.login__body}>
                <span className={style.login__title}>
                    Welcome back
                    </span>
                <div className={style.login__wrapper}>
        
                        <div className={style.login__row}>
                            <div className={style.login__left}>
                                <div className={style.login__item}>
                                    <label className={style.login__item_title}>Email</label>
                                    <input required className={style.login__item_input} type="email" name="email" placeholder="name@email.com"  />
                                   
                                </div>
                                <div className={style.login__item}>
                                    <label className={style.login__item_title}>Password</label>
                                    <input required className={style.login__item_input} type="password" name="password" placeholder="Enter your password..." />
                                    
                                    <a href=" ">Forgot password?</a>
                                </div>
                                <div className={style.login__item}>
                                    <button className={style.login__item_button} type="submit" value="Login">Login</button>
                                </div>
                            </div>

                            <div className={style.login__inner}>
                                <div className={style.login__inner_title}>
                                    <span >or</span>
                                </div>
                            </div>

                            <div className={style.login__right}>
                                <button className={style.login__social_button} >
                                    
                                    <span className={style.login__social_title}>Continue with Facebook</span>
                                </button>
                                <button className={style.login__social_button} >
                                    
                                    <span className={style.login__social_title}>Continue with Apple</span>
                                </button>
                                <button className={style.login__social_button} >
                                    
                                    <span className={style.login__social_title}>Continue with Google</span>
                                </button>
                                <div className={style.login__social_option}>
                                    <span>New to hiMath Gaming?
                            
                                    </span>
                                    <a href=" ">Log in with your organization</a>
                                </div>
                            </div>
                        </div>
                    

                </div>
            </div>
        </div>
    </React.Fragment>
}