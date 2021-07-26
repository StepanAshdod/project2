import React from "react";
import style from "./Products.css";
import logo_photo from '../../../images/logo1.jpg';

export const Products = () => {
    const products = [
        {id: 1, appName: "Integral Basics", displayName: "Integral Basics",description: "Introduction to integration operation...", field: "Mathematics", photo: ""},
        {id: 2, appName: "Indefinite Integral Basics", displayName: "Indefinite Integral Basics", description: "Introduction to integration operation...", field: "Mathematics", photo: ""},
        {id: 3, appName: "Integration by parts", displayName: "Integration by parts", description: "Introduction to integration operation...", field: "Mathematics", photo: ""},
        {id: 4, appName: "Reverse Chain rule", displayName: "Reverse Chain rule", description: "Introduction to integration operation...", field: "Mathematics", photo: ""},
        {id: 5, appName: "Java", displayName: "Java", description: "Introduction to integration operation...", field: "Programming", photo: ""},
        {id: 6, appName: "Python", displayName: "Python", description: "Introduction to integration operation...", field: "Programming", photo: ""},
        {id: 7, appName: "JavaScript", displayName: "JavaScript", description: "Introduction to integration operation...", field: "Programming", photo: ""},
        {id: 8, appName: "C++", displayName: "C++", description: "Introduction to integration operation...", field: "Programming", photo: ""},
        {id: 9, appName: "Classical Physic", displayName: "Classical Physic", description: "Introduction to integration operation...", field: "Physics", photo: ""},
        {id: 10, appName: "Relativistic Physic", displayName: "Relativistic Physic", description: "Introduction to integration operation...", field: "Physics", photo: ""},
    ];

    // const handleChangeCategory = (event) => {
    //     event.preventDefault();
    //     const field = event.target.name.products(field.toLowerCase());
    // }

    const itemProduct = products.map(product => {
        return <div key={product.id} className={'products_item'}>
            <div className={'products_item_wrapper'}>
                <img className={'products_photo'} src={logo_photo}  alt="" />
                <div className={'products_content'}>
                    <div className={'products_info'}>
                        
                            {/* <span className={'products_info_title'}>{product.product}</span> */}
                            <div className={'products_content_title'}>
                            <span className={'products_info_title'}>{product.displayName}</span>
                            {/* <span className={'products_info_title'}>{product.displayName}</span> */}
                            <span className={'products_info_title'}>{product.description}</span>
                            <span className={'products_info_title'}>{product.field}</span>
                            </div>
                        
                        <span className={'products_info_subtitle'}>Introduction to integration operation...</span>
                    </div>
                    <div className={'products_buttons'}>
                        <button className={'products_buttons_item'} type="button">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    });

    return <React.Fragment>
        <div className={'products'}>
            <div className={'products_header'}>
                <div className={'products_header_strip'}>
                    <div/>
                </div>
                <span className={'products_header_title'}>Products</span>
            </div>
            <div className={'products_body'}>
                
            <div className={'search_data'}>
                    <div className={'search_icon'}/>
                    <input className={'input_search'} onChange={(event) => (event.target.name)}
                           type="search" name="search" placeholder="Search in products"/>
                </div>

                <div className={'products_menu'}>
                <button className={'products_menu_link'} /*onClick={handleChangeCategory}*/type="button"
                            name="all">All
                    </button>
                    <button className={'products_menu_link'} /*onClick={handleChangeCategory}*/ type="button"
                            name="math">Mathematics
                    </button>
                    <button className={'products_menu_link'} /*onClick={handleChangeCategory}*/ type="button"
                            name="programming">Programming
                    </button>
                    <button className={'products_menu_link'} /*onClick={handleChangeCategory}*/ type="button"
                            name="physics">Physics
                    </button>
                </div>
                <div className={'products_items'}>
                    {itemProduct}
                </div>
            </div>
        </div>
    </React.Fragment>
}

