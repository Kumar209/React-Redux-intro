import React from 'react';
import cart from "../assets/cart.png";

function Header(props)
{
    console.warn("Header", props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src={cart} />
            </div>
        </div>
    )
}

export default Header