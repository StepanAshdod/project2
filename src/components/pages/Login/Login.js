import React from "react";
import "./Login.css";
import FacebookIcon from "../../../images/facebook.png";
import AppleIcon from "../../../images/apple.png";
import GoogleIcon from "../../../images/google.png";
export const Login = () => {

    return <React.Fragment>
        <div className={'login'}>
            <div className={'login_header'}>
                <div className={'login_header_strip'}>
                    <div />
                </div>
                <span className={'login_header_title'}>Login</span>
            </div>
            <div className={'login_body'}>
                <span className={'login_title'}>
                    Welcome back
                    </span>
                <div className={'login_wrapper'}>
        
                        <div className={'login_row'}>
                            <div className={'login_left'}>
                                <div className={'login_item'}>
                                    <label className={'login_item_title'}>Email</label>
                                    <input required className={'login_item_input'} type="email" name="email" placeholder="name@email.com"  />
                                   
                                </div>
                                <div className={'login_item'}>
                                    <label className={'login_item_title'}>Password</label>
                                    <input required className={'login_item_input'} type="password" name="password" placeholder="Enter your password..." />
                                    
                                    <a href=" ">Forgot password?</a>
                                </div>
                                <div className={'login_item'}>
                                    <button className={'login_item_button'} type="submit" value="Login">Login</button>
                                </div>
                            </div>

                            <div className={'login_inner'}>
                                
                            </div>

                            <div className={'login_right'}>
                                <button className={'login_social_button'} >
                                <img className={'icon_facebook'} src={FacebookIcon} alt=""/>
                                    <span className={'login_social_title'}>Continue with Facebook</span>
                                </button>
                                <button className={'login_social_button'} >   
                                <img className={'icon_apple'} src={AppleIcon} alt=""/>                                 
                                    <span className={'login_social_title'}>Continue with Apple</span>
                                </button>

                                <button className={'login_social_button'} >   
                                <img className={'icon_google'} src={GoogleIcon} alt=""/>                         
                                    <span className={'login_social_title'}>Continue with Google</span>
                                </button>

                                <div className={'login_social_option'}>
                                    <span>New to hiMath Gaming?</span>
                                    <a href=" ">Log in with your organization</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}