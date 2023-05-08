import React from 'react';
import img from "../components/img/Frame-3.png"
import icon1 from "../components/img/icon1'.svg"
import icon2 from "../components/img/icon2.png"
import icon3 from "../components/img/icon2.png"
import icon4 from "../components/img/icon4.png"
import icon5 from "../components/img/icon5.png"

const Hero = () => {
    return (
        <div className="bg-[#191919]">
            <div className="container " >
                <div className="flex py-[90px] items-center justify-around">
                    <img src={img} width={400} alt=""/>
                    <div>
                        <h1 className="text-[54px] font-normal text-white">Take your <br/> Podcast to the <br/> next <span className="text-white font-bold">level</span></h1>
                        <p className="text-white py-[40px] pl-[20px]">listen on</p>
                        <div className="flex mx-2">
                            <img className="mx-[5px]" src={icon1} alt=""/>
                            <img className="mx-[5px]" src={icon2} alt=""/>
                            <img className="mx-[5px]" src={icon3} alt=""/>
                            <img className="mx-[5px]" src={icon4} alt=""/>
                            <img className="mx-[5px]" src={icon5} alt=""/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;