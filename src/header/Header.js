import React from "react";
import { Link } from "react-router-dom";
import SearchPanel from "./SearchPanel";
import './Header.scss';

export default function Header({ numItems, total, showModal }) {
    return (
        <header
            className={`d-sm-flex flex-sm-row justify-content-between align-items-center`}
        >
            <Link to="/" className={`header__logo`} href="#">
                Tool Shop
            </Link>
            <SearchPanel />
            <button className="btn btn-secondary"  onClick={e => showModal()}
            > Sing In </button>
            <Link to="/cart" >
                <i className={`fa fa-shopping-cart`} />
                {numItems} items (${total})
            </Link>
        </header>
    );
}
