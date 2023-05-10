import React, {useEffect} from 'react';
import {useState} from "react";

const Header = () => {
    const [scroll, setScroll] = useState(0)

    const toScroll = () => {
        setScroll(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    }, [])
    return (
        <header id="header" className="bg-[#191919] fixed w-[100%] py-6" style={{
            background: scroll > 50 ? '#00C391' : ''
        }}>
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