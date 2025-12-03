import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='nav'>
            <h2>This is Header</h2>
            <NavLink to="/">
                {({ isActive }) => (
                    <span className={isActive ? "active" : ""}>Home</span>
                )}
            </NavLink>
            <NavLink to="/mobiles">
                {({ isActive }) => (
                    <span className={isActive ? "active" : ""}>Mobiles</span>
                )}
            </NavLink>
            <NavLink to="/laptops">
                {({ isActive }) => (
                    <span className={isActive ? "active" : ""}>Laptops</span>
                )}
            </NavLink>

            <NavLink to="/app">
                {({ isActive }) => (
                    <span className={isActive ? "active" : ""}>App</span>
                )}
            </NavLink>

        </div>
    );
};

export default Navbar;