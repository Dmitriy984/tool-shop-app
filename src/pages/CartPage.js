import React, {Component} from "react";
import ShoppingCartTable from "../shoppingCart/shoppingCartTable";
import compose from "../common/utils/compose";
import withToolShopApi from "../common/hoc/withToolShopApi";
import {login} from "../app/App";
import "./CartPage.scss";

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            cart: [],
            total: 0
        };
        this.onDelete = this.onDelete.bind(this);
        this.onIncrease = this.onIncrease.bind(this);
        this.onDiminish = this.onDiminish.bind(this);
    }

    componentDidMount() {
        if (login) {
            this.props.toolShopApi.checkEmail(login).then(([user]) => {
                if (typeof user != "undefined" && user.isLogged === true) {
                    const { id, cart, total } = user;
                    this.setState({ id, cart, total });
                }
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
    }

    onDelete(id) {
        console.log('Delete', id);
    }

    onIncrease(id) {
        console.log('Increase', id);
    }

    onDiminish(id) {
        console.log('Diminish', id);
    }

    render() {

        if (this.state.cart.length === 0) {
            return <h1>No goods</h1>
        }

        return (
            <div>
                <ShoppingCartTable
                items={this.state.cart}
                total={this.state.total}
                onDelete={this.onDelete}
                onIncrease={this.onIncrease}
                onDiminish={this.onDiminish}
                />
                <button className="btn btn-primary cart__table_order">To Order</button>
            </div>
        );
    }
}

export default compose(
    withToolShopApi()
)(CartPage);