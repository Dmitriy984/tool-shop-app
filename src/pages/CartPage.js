import React, {Component} from "react";
import ShoppingCartTable from "../shoppingCart/shoppingCartTable";

export default class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [
                {
                    "id": 1,
                    "title": "Makita FS6300 Drywall Screwdriver 240V",
                    "image": "https://cdn11.bigcommerce.com/s-7holhynnib/images/stencil/original/products/56948/58101/5aafb4bce422a700107579ab__31349.1583489852.jpg",
                    "quantity": 0,
                    "price": 105
                },
                {
                    "id": 2,
                    "title": "Makita VC2012L L Class Wet & Dry Dust Extractor 20L (110V)",
                    "image": "https://cdn11.bigcommerce.com/s-7holhynnib/images/stencil/original/products/56629/56927/5aafb4cde422a70010757c42__61664.1584098348.jpg",
                    "quantity": 0,
                    "price": 195
                }
            ],
            total: 0
        };
        this.onDelete = this.onDelete.bind(this);
        this.onIncrease = this.onIncrease.bind(this);
        this.onDiminish = this.onDiminish.bind(this);
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
        return (
            <div>
                <ShoppingCartTable
                items={this.state.cart}
                total={this.state.total}
                onDelete={this.onDelete}
                onIncrease={this.onIncrease}
                onDiminish={this.onDiminish}
                />
            </div>
        );
    }
}