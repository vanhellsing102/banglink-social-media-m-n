import React from 'react';
import SearchBL from './SearchBL';
import MainNav from './MainNav';
import ProfileAndContact from './ProfileAndContact';

const Navbar = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 justify-between items-center w-full gap-5 py-3 px-2'>
            <SearchBL></SearchBL>
            <MainNav></MainNav>
            <ProfileAndContact></ProfileAndContact>
        </div>
    );
};

export default Navbar;