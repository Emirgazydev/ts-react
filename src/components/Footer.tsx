import React from 'react';
import icon1 from "../components/img/icon1'.svg"
import icon2 from "../components/img/icon2.png"
import icon3 from "../components/img/icon11.svg"
import icon4 from "../components/img/icon22.svg"
import icon5 from "../components/img/icon33.svg"
import {AiOutlineInstagram} from "react-icons/ai";
import {CiTwitter,CiFacebook} from "react-icons/ci";

const Footer = () => {
    return (
        <div className="flex justify-between text-white items-start p-[100px]">
            <div>
                <h1 className="font-bold text-4xl pb-2">Castaway</h1>
                <div className="flex text-4xl justify-evenly pt-6 text-red-600">
                    <a href="https://www.instagram.com/"><AiOutlineInstagram/></a>
                    <a href="https://twitter.com/?lang=ru"><CiTwitter/></a>
                    <a href="https://ru-ru.facebook.com/"><CiFacebook/></a>
                </div>
            </div>
            <div className="flex flex-col">
                <a className="pb-4" href="#">Home</a>
                <a className="pb-4" href="#">About</a>
                <a className="pb-4" href="#">Episodes</a>
                <a className="pb-4" href="#">Contact</a>
            </div>
            <div className="flex flex-col">
                <a className="pb-4" href="#">Style Guide</a>
                <a className="pb-4" href="#">Instructions</a>
                <a className="pb-4" href="#">Changelog</a>
                <a className="pb-4" href="#">Credit</a>
                <a className="pb-4" href="#">Powered by Webflow</a>
                <a className="pb-4" href="#">Licenses</a>
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