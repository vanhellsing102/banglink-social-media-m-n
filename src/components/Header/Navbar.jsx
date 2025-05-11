import React from 'react';
import LeftNav from './LeftNav';
import MiddleNav from './MiddleNav';
import RightNav from './RightNav';

const Navbar = () => {
    return (
        <div className='grid grid-cols-3 justify-between items-center w-full gap-5 py-3 px-2'>
            <LeftNav></LeftNav>
            <MiddleNav></MiddleNav>
            <RightNav></RightNav>
        </div>
    );
};

export default Navbar;