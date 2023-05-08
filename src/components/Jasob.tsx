import React from 'react';
import IMAGE from "../components/img/IMG...png"

const Jasob = () => {
    return (
        <div className="jacob bg-[#191919] py-16">
            <div className="container">
                <div className="flex justify-around items-center">
                    <div className="jacob-left">
                        <a href="#" className="flex justify-center items-center text-6xl w-[112px] text-white rounded-full my-4 h-[112px] bg-blue-500">+</a>
                        <p className="text-blue-500">Meet your host</p>
                        <h1 className="text-white text-6xl font-normal">Jacob Paulaner</h1>
                        <p className="text-white leading-8 py-6">Jacob has a background in audio engineering, and has <br/> been podcasting since the early days.</p>
                        <p className="text-white leading-8">He’s here to help you level up your game by sharing <br/> everything he’s learned along the way.</p>
                    </div>            <img src={IMAGE} width={650} alt="img"/>        </div>    </div></div>
    );
};

export default Jasob;