import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return <>
    
    <Nav></Nav>
    <div className='min-h-[calc(100vh-290px)] '>
        <div className=''>
            <Outlet/> 
        </div> 
    </div>
    <Footer></Footer>

    </>
};

export default MainLayout;