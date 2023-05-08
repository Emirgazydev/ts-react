import React from 'react';
import icon1 from "../components/img/icon1'.svg"
import icon2 from "../components/img/icon2.png"
import icon3 from "../components/img/icon3.png"
import icon4 from "../components/img/icon4.png"
import icon5 from "../components/img/icon5.png"
import {AiOutlineInstagram} from "react-icons/ai";
import {CiTwitter,CiFacebook} from "react-icons/ci";

const Footer = () => {
    return (
        <div className="flex justify-between text-white items-start pb-[100px]">
            <div>
                <h1 className="font-bold text-4xl pb-2">Castaway</h1>
                <div className="flex text-2xl">
                    <a href="https://www.instagram.com/"><AiOutlineInstagram/></a>
                    <a href="https://twitter.com/?lang=ru"><CiTwitter/></a>
                    <a href="https://ru-ru.facebook.com/"><CiFacebook/></a>
                </div>
            </div>
            <div className="flex flex-col">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Episodes</a>
                <a href="#">Contact</a>
            </div>
            <div className="flex flex-col">
                <a href="#">Style Guide</a>
                <a href="#">Instructions</a>
                <a href="#">Changelog</a>
                <a href="#">Credit</a>
                <a href="#">Powered by Webflow</a>
                <a href="#">Licenses</a>
            </div>
            <div className="flex">
                <img src={icon1} alt="" className="mx-2"/>
                <img src={icon2} alt="" className="mx-2"/>
                <img src={icon3} alt="" className="mx-2"/>
                <img src={icon4} alt="" className="mx-2"/>
                <img src={icon5} alt="" className="mx-2"/>
            </div>
        </div>
    );
};

export default Footer;