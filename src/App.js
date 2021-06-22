import React from 'react';
import "./App.css";
import { PaperBase } from "./components/navigation/PaperBase";
import {TEAM} from "./service/apiConst";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";

export const App = () => {
    return (
        <Switch>
            <Route path={ "" } component={ PaperBase } exact/>
            <Redirect to={ "/" + TEAM }/>
        </Switch>
    );
}

