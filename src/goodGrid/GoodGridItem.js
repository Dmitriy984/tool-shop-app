import React from "react";
import './GoodGridItem.scss';

export default function GoodGridItem({ good, onAddedToCart }) {
    const {
        title,
        image,
        price
    } = good;
    return (
        <div className="goods_item">
            <img src={image} alt="cover" />
            <p>{title}</p>
            <p>&euro;{price}</p>
            <button
                onClick={onAddedToCart}
                className="btn btn-info"
            >
                Add to cart
            </button>
        </div>
    );
}