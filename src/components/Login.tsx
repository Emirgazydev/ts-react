import React from 'react';

const Login = () => {
    return (
        <div className="bg-[#191919]">
            <div className="container">
                <div className="bg-black py-[60px] px-[80px] rounded-[20px]    leading-[79px] ">
                    <div className="flex justify-between items-start ">
                        <div>
                            <h5 className="text-[#118DA8] font-normal text-[18px]">Email Newsletter</h5>
                            <h1 className="text-white font-normal text-[72px]">Subscribe <br/> for updates</h1>
                        </div>
                        <div>
                            <div className='flex flex-col'>  <input  className="  font-normal rounded-[8px] my-[20px] outline-none text-white text-[24px] px-[15px]  bg-[#191919]" type="text" placeholder="name"/>
                                <input className="  font-normal rounded-[8px]  outline-none text-white text-[24px] px-[15px]  bg-[#191919]" type="text" placeholder="Email"/>
                            </div>
                            <button className="w-[83px] h-[40px] rounded-[4px] mt-[10px] bg-blue-600 text-white flex items-center justify-center">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;