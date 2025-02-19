import React from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

const Layout = () => {
    return (
        <div className='overflow-x-cli  fontEstedad max-w-[1440px] m-[0_auto]'>
            <header>
            <Navbar />
            </header>
            <Outlet />
            <footer>
            <Footer />
            </footer>
        </div>
    );
};

export default Layout;