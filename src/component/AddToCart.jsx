import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../features/cartSlice';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { getCartTotal, increment, decrement } from '../features/cartSlice';

const AddToCart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const totalQuntity = useSelector((state) => state.cart.totalQuantity);
    const totalPrices = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])

    const removeItem = (id) => {
        dispatch(removeCart(id));
    }

    const itemDecrement = (id) => {
        dispatch(decrement(id))
    }

    const itemIncrement = (id) => {
        dispatch(increment(id))
    }


    return (
        <>
            {
                cart.length > 0 ?
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            {
                                cart.map(({ id, img, price, quantity, title }) => {
                                    return (
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem' }}>
                                            <div>
                                                <img src={img} height={100} width={100} />
                                                <p>{title}</p>
                                            </div>
                                            <div style={{ display: 'flex', gap: '2rem' }}>
                                                <button onClick={() => itemDecrement(id)} style = {{ display: quantity === 0 ? 'none' : 'block'}}>Decrement</button>
                                                <p>Quantity: {quantity}</p>
                                                <button onClick={() => itemIncrement(id)}>Increment</button>
                                            </div>
                                            <p>{price}</p>
                                            <button onClick={() => removeItem(id)}>Remove</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div style={{ width: '16rem', height: '12rem', border: '1px solid black', textAlign: 'center' }}>
                            <p>Summary</p>
                            <hr />
                            <p>Total Quantity : {totalQuntity}</p>
                            <p>Total Amount : {totalPrices}</p>
                            <hr />
                            <Link style={{ cursor: 'pointer' }} to='/'>Go To Checkout</Link>
                        </div>
                    </div>
                    : <h4 style={{ textAlign: 'center', marginTop: '3rem' }}>Please add the items</h4>
            }
        </>
    )
}

export default AddToCart