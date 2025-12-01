import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto min-h-screen'><Outlet></Outlet></div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;