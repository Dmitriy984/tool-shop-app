import React from "react";
import { Link } from "react-router-dom";
import SearchPanel from "./SearchPanel";
import {SingInButton} from "./SingInButton";
import {SingUpButton} from "./SingUpButton";
import {SingOutButton} from "./SingOutButton";
import './Header.scss';

export default function Header({
   numItems,
   total,
   showModalSingIn,
   showModalSingUp,
   isLoggedIn,
   onSingOut,
   login
}) {
    let button;
    let element;
    if (isLoggedIn) {
        button = <SingOutButton onSingOut={onSingOut} />;
        element = (
            <Link to="/orders" >
                <h5>Orders</h5>
            </Link>
        );
    } else {
        button = <SingInButton showModalSingIn={showModalSingIn}/>;
        element = <SingUpButton showModalSingUp={showModalSingUp} />;
    }
    return (
        <header
            className={`d-sm-flex flex-sm-row justify-content-between align-items-center`}
        >
            <Link to="/" className={`header__logo`} href="#">
                Tool Shop
            </Link>
            <SearchPanel />
            { isLoggedIn ? login : null }
            { button }
            { element }
            <Link to="/cart" >
                <i className={`fa fa-shopping-cart`} />
                {numItems} items (&euro;{total})
            </Link>
        </header>
    );
}
