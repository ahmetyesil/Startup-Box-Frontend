import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import routes from "../routes";
import Footer from "./Footer";

class Layout extends React.Component {
    constructor() {
        super(); 
    }

    render() {
        return (
          <div> 
            <Header />
            <Switch>
              { routes.map( route => <Route key={ route.path } { ...route } /> ) }
            </Switch>
            <Footer/>
          </div>
        );
    }
}

export default Layout;
