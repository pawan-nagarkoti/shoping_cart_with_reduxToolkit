import React from 'react'
import CartList from './CartList'

const Home = () => {
    return (
        <>
            <div className="container" style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                margin: '2rem auto',
            }}>
                <CartList />
            </div>
        </>
    )
}

export default Home