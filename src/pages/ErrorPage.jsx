import React from 'react';
import Nav from '../Components/Nav';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='mt-5 text-center'>
                <img src="404_page_cover.jpg" alt="" className='lg:w-1/2 rounded-2xl mx-auto' />
    <Link to='/'>
    <button class="mt-3 relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
    <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
    <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Go to Home</span>
    </button>
    </Link>
            </div>
        </div>
    );
};

export default ErrorPage;