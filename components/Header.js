import React from 'react';
import Image from 'next/image';
import Airbnb from '../public/airbnb.png';

const Header = () => {
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-red-500">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image 
            src={Airbnb}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            />
        </div>

        <div className="search"></div>

        <div className="login"></div>
        
        </header>
    )
}

export default Header