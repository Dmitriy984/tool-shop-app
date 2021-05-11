import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../header/Header";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import './App.scss';
import ModalSingIn from "../header/ModalSingIn";

export default class App extends Component {
    state = {
        show: false
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
                    showModal={this.showModal}
                />
                <nav>
                    Navigation
                </nav>
                <main>
                    <ModalSingIn
                        onClose={this.closeModal}
                        show={this.state.show}
                    />
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/cart" component={CartPage}/>
                    </Switch>
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        );
    }
}