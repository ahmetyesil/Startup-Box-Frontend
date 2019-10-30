import React from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import Layout from "./layout/Layout"; 
import store from "./store";

render(
    <Provider store={store}>
        <Router>
            <Layout />
        </Router>
    </Provider>, document.getElementById("root")
);