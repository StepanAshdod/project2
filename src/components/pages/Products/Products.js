import React from "react";
import style from "./Products.css";

export const Products = () => {
    const products = [
        {id: 1, product: "Integral Basics"},
        {id: 2, product: "Indefinite Integral Basics"},
        {id: 3, product: "Integration by parts"},
        {id: 4, product: "Reverse Chain rule"}
    ];

    const itemProduct = products.map(product => {
        return <div key={product.id} className={'products_item'}>
            <div className={'products_item_wrapper'}>
                <img className={'products_photo'} src=""  alt="" />
                <div className={'products_content'}>
                    <div className={'products_info'}>
                        <div>
                            <span className={'products_info_title'}>{product.product}</span>
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
                <div className={'products_menu'}>
                    <button className={'products_menu_link'} value="all" type="submit">All</button>
                    <button className={'products_menu_link'} value="math" type="submit">Math</button>
                    <button className={'products_menu_link'} value="programming" type="submit">Programming</button>
                    <button className={'products_menu_link'} value="physics" type="submit">Physics</button>
                </div>
                <div className={'products_items'}>
                    {itemProduct}
                </div>
            </div>
        </div>
    </React.Fragment>
}

