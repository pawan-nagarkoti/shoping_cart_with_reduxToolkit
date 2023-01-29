import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Navigation = () => {
    const totalCartItem = useSelector((state)=> state.cart.cart);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
                position: 'sticky',
                top: '0px',
                zIndex: '999'
            }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Shoping Cart</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='addtocart'>Cart <span>{totalCartItem.length}</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation