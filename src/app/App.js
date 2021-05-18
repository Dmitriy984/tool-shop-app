import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../header/Header";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ModalSingIn from "../header/ModalSingIn";
import ModalSingUp from "../header/ModalSingUp";
import {readCookie} from "../common/utils/helpers";
import compose from "../common/utils/compose";
import withToolShopApi from "../common/hoc/withToolShopApi";
import './App.scss';

export const login = readCookie("email");

class App extends Component {
    state = {
        show: false,
        isLoggedIn: false,
        numItems: 0,
        total: 0
    };

    componentDidMount() {
        if (login) {
            this.props.toolShopApi.checkEmail(login).then(([user]) => {
                const {id, email, isLogged, cart, total} = user;
                if (typeof user != "undefined" && isLogged === true) {
                    this.setState({isLoggedIn: true});
                    this.setState({numItems: cart.length});
                    this.setState({total: total});
                }
            });
        }
    }

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
        const { show, isLoggedIn, numItems, total } = this.state;
        return (
            <div id="page">
                <Header
                    numItems={numItems}
                    total={total}
                    showModalSingIn={this.showModal}
                    isLoggedIn={isLoggedIn}
                />
                <nav>
                    Navigation
                </nav>
                <main>
                    <ModalSingIn
                        caption="Sing In"
                        onClose={this.closeModal}
                        show={show}
                    />
                    <ModalSingUp
                        caption="Sing Up"
                        // onClose={this.closeModal}
                        // show={this.state.show}
                    />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/cart" component={CartPage} />
                        <Route path="/orders" component={OrderPage} />
                    </Switch>
                </main>
                <footer>
                    <p><small>© 2021 TOOL SHOP — Terms of Service</small></p>
                </footer>
            </div>
        );
    }
}

export default compose(
    withToolShopApi()
)(App);