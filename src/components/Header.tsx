import React from 'react';

const Header = () => {
    return (
        <header id="header" className="bg-[#191919] fixed w-[100%] py-6">
            <div className="container">
                <div className="header flex justify-between items-center"><h1
                    className="text-3xl font-semibold text-white ">Castaway</h1>
                    <div className="header-nav flex text-white"><a href="#" className="text-blue-300">Home</a> <a
                        href="#" className="mx-4">Product</a> <a href="#">About</a> <a href="#"
                                                                                       className="mx-4">Contact</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;