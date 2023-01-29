import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const CartList = () => {
    const cart = useSelector((state) => state.cart.cartItem);
    const dispatch = useDispatch();
    const addToCart = (id, img, price, title, quantity) => {
        dispatch(addItem({ id, img, price, title, quantity }))
    }
    return (
        <>
            {
                cart.map(({ id, img, price, title, quantity }) => {
                    return (
                        <div key={id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={img} className="card-img-top" alt="..." height={200} />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItem: 'center' }}>
                                        <button className="btn btn-primary" onClick={() => addToCart(id, img, price, title, quantity)}>Add To Cart</button>
                                        <span>Price ${price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CartList