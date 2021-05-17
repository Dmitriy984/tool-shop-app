import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../header/Header";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ModalSingIn from "../header/ModalSingIn";
import ModalSingUp from "../header/ModalSingUp";
import './App.scss';

export default class App extends Component {
    state = {
        show: false,
        isLoggedIn: false
    };

    showModal = e => {
        this.setState({
            show: true
        });
    };

    closeModal = e => {
        this.setState({
            show: false
        });
    };

    render() {
        return (
            <div id="page">
                <Header
                    numItems={5}
                    total={210}
                    showModalSingIn={this.showModal}
                    isLoggedIn={this.state.isLoggedIn}
                />
                <nav>
                    Navigation
                </nav>
                <main>
                    <ModalSingIn
                        caption="Sing In"
                        onClose={this.closeModal}
                        show={this.state.show}
                    />
                    <ModalSingUp
                        caption="Sing Up"
                        // onClose={this.closeModal}
                        // show={this.state.show}
                    />
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/cart" component={CartPage}/>
                        <Route path="/orders" component={OrderPage}/>
                    </Switch>
                </main>
                <footer>
                    <p><small>© 2021 TOOL SHOP — Terms of Service</small></p>
                </footer>
            </div>
        );
    }
}