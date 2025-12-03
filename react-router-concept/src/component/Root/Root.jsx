import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import SideBar from '../SideBar/SideBar';
import './Root.css'
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='sidebar'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Root;