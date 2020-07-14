import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <nav>
            <h2>Shoe Store App</h2>
            <Link to="/">Home</Link> {" | "}
            <Link to="products">Products</Link>
        </nav>
    )
}
