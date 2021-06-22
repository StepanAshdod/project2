import React from "react";
import style from './Contact.css';

export const Contact = () => {
    return <React.Fragment>
    <div className={'contact'}>
        <div className={'contact_header'}>
            <div className={'contact_header_strip'}>
                <div/>
            </div>
            <span className={'contact_header_title'}>Contact</span>
        </div>
        <div className={'contact_body'}>
                <span className={'contact_title'}>
                    Get In Touch
                </span>
            <span className={'contact_subtitle'}>
                    We'd love to hear your thoughts and be in touch with us
                </span>
            <textarea className={'contact_message'}  name="" placeholder="Message"/>
            <div className={'contact_data'}>
                <div className={'contact_data_input'}>
                    <input required className={'contact_input_email'} type="email" name="email" placeholder="Email Address" />
                    <input required className={'contact_input_name'} type="text" name="name" placeholder="Full Name" />
                </div>
                <button className={'contact_data_button'} type="submit">Send</button>
            </div>
        </div>
    </div>
</React.Fragment>
}