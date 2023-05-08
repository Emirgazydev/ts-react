import React from 'react';
import log from "../components/img/IMAGE.svg"
import log2 from "../components/img/log2.png"
import log3 from "../components/img/log3.png"

const Blocs = () => {
    return (
        <div>
            <div className="flex justify-between py-[70px]">
                <h1 className="text-white text-3xl">Latest episodes</h1>
                <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    View all episodes
                </button>
            </div>
            <div className="bg-black rounded-2xl text-white">
                <div className="flex p-8">
                    <img src={log} alt="img"/>
                    <div className="px-[50px]">
                        <div className="bg-gray-900 h-[30px] text-center rounded-[6px] w-[50px]">Gear</div>
                        <p className="text-blue-500 pt-[50px] pb-[20px]">Episode 3</p>
                        <h1 className="font-bold text-6xl">Should you get <br/> outboard audio gear?</h1>
                        <p className="py-[38px]">Is hardware really worth it when it comes to podcasting? The answer is...it <br/> depends. Here’s our reasons on why you might want to consider picking <br/> something up.</p>
                        <button type="button"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            View Episode Details
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-black rounded-2xl text-white my-[50px]">
                <div className="flex p-8">
                    <img src={log2} alt="img"/>
                    <div className="px-[50px]">
                        <div className="bg-gray-900 h-[30px] text-center rounded-[6px] w-[100px]">Tips & Tricks</div>
                        <p className="text-blue-500 pt-[50px] pb-[20px]">Episode 2</p>
                        <h1 className="font-bold text-6xl">Mic tricks to take <br/> you to the next level</h1>
                        <p className="py-[38px]">Stop rolling with those default settings on your mic. These small tweaks will <br/> take you from sounding good to great.</p>
                        <button type="button"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            View Episode Details
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-black rounded-2xl text-white">
                <div className="flex p-8">
                    <img src={log3} alt="img"/>
                    <div className="px-[50px]">
                        <div className="bg-gray-900 h-[30px] text-center rounded-[6px] w-[50px]">Gear</div>
                        <p className="text-blue-500 pt-[50px] pb-[20px]">Episode 1</p>
                        <h1 className="font-bold text-6xl">The best microphone <br/> under $200</h1>
                        <p className="py-[38px]">With so many microphones on the market, how are you supposed to know <br/> what’s the best? Take a look at our top picks.</p>
                        <button type="button"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            View Episode Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blocs;