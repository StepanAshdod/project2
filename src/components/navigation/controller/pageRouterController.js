import {Redirect, Route, Switch} from "react-router";
import {HOME, ABOUT, TEAM, PRODUCT, CONTACT, LOGIN} from "../../../service/apiConst";
import {Team} from "../../pages/Team/Team";
import {Home} from "../../pages/Home/Home";
import {Products} from "../../pages/Products/Products";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {Login} from "../../pages/Login/Login";


export const pageRouter = () => {
    return (
        <Switch>
            <Route path={ "/" + TEAM.toLowerCase() } component={ Team } exact/>
            <Route path={ "/" + HOME.toLowerCase() } component={ Home } exact/>
            <Route path={ "/" + ABOUT.toLowerCase() } component={ About } exact/>
            <Route path={ "/" + PRODUCT.toLowerCase() } component={ Products } exact/>
            <Route path={ "/" + CONTACT.toLowerCase() } component={ Contact} exact/>
            <Route path={ "/" + LOGIN.toLowerCase() } component={ Login } exact/>
            <Redirect to={ "/" + HOME.toLowerCase() }/>
        </Switch>
    )
};


