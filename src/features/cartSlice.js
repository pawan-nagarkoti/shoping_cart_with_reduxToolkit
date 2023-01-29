import { createSlice } from '@reduxjs/toolkit';
import ProductList from '../ProductList'

const initialState = {
    cartItem: ProductList,
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
        },

        removeCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce((cartTotal, cartItem) => {
                const { quantity, price } = cartItem;
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
            },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            )
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        increment: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
        },
        decrement: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
        }
    }
})

export const { addItem, removeCart, getCartTotal, increment, decrement } = cartSlice.actions
export default cartSlice.reducer
