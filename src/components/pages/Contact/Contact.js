import React from "react";
import './Contact.css';
import { Link } from "react-router-dom";

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
        <div className={'contact_footer'}>
        <ul className={'contact_footer_links'}>
            <li className={'links'}><Link to="#" style={{ textDecoration: 'none',color:'#808080' }}>Features</Link></li>
            <li className={'links'}><Link to="#" style={{ textDecoration: 'none',color:'#808080' }}>About</Link></li>
            <li className={'links'}><Link to="#" style={{ textDecoration: 'none',color:'#808080' }}>Testimonials</Link></li>
            <li className={'links'}><Link to="#" style={{ textDecoration: 'none',color:'#808080' }}>Contact</Link></li>
            <li className={'links'}><Link to="#" style={{ textDecoration: 'none',color:'#808080' }}>Download</Link></li>
          </ul>
        </div>
        <div className="links_underline"></div>
        <h3 className="contact_information">1717 HARRISON St. SAN FRANCISCO,CA 94103,USA</h3>
        <h3 className="contact_company_name"><span>&#169;</span>YOUR company Name</h3>
    </div>
</React.Fragment>
}