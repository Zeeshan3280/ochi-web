import React from 'react';

function Navbar() {
    return (
        <div className='w-full px-20 py-8 flex justify-between items-center'>
            <div className='logo text-xl'>OCHI</div>
            <div className='links flex gap-10'>
                {["Services", "Our works", "About us", "Insights", "Contact"].map((item, index) => (
                    <a key={index} href className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
