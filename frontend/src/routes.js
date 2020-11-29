import React from 'react';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import Logon from './pages/Logon/index';
import Register from './pages/Register/index';

export default function Routes(){
    return(
        // <BrowserRouter>
            <Switch>
                <Route path="/" component ={Logon}exact />
                <Route path="/cadastro" component ={Register} />
            </Switch>
        // </BrowserRouter>
    );
}