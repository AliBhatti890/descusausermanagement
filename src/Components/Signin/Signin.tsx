
import React from 'react';
import logo from '../Svg Icons/Group35.png';
import { useNavigate } from 'react-router-dom';
import MainPageChild from '../Child Component/MainPageChild';
// import MainPageChild from '../Child Component/MainPageChild';



const Signin: React.FC = () => {

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/');
    };


    return (
        <div className="grid grid-cols-2 h-screen w-screen ">
            <div className="relative bg-gray-50 p-8">
                <div className="absolute top-14 left-14">
                    <img src={logo} alt="Nova HR Logo" className="w-48" />
                </div>
                <div className="grid  justify-center items-end h-full">
                    <div className="flex-col items-center p-12">
                        <div className="flex flex-col items-start ">
                            <h1 className="text-4xl font-bold text-center  flex items-center mb-2">
                                Please Sign - In
                            </h1>
                            <p className="text-[16px] text-center text-[#393939] mb-2">
                                We welcome you back
                            </p>
                        </div>
                        <div className=" items-start w-full">
                            <button className="flex items-center  justify-center border border-[#D0D0D0] rounded-md px-4 py-2 w-full  text-sm font-medium text-gray-700 hover:bg-gray-100 ">
                                Resume your Technova journey
                            </button>
                            <div className="flex items-center w-full  ">
                                <hr className="w-full border-gray-300" />
                                <span className="px-2 text-gray-400">OR</span>
                                <hr className="w-full border-gray-300" />
                            </div>

                            <input type="email" placeholder="Enter Your Email" className="border border-gray-300 rounded-md px-4 py-2 w-full  mb-2 text-start  font-medium text-gray-700" />
                            <input type="password" placeholder="Enter Your Password" className="border border-gray-300 rounded-md px-4 py-2 w-full  mb-2 text-start  font-medium text-gray-700" />
                            <button className="bg-[#307D6F] text-white rounded-md px-4 py-2 w-full  text-sm font-medium"
                                onClick={handleNavigation}> Next </button>
                        </div>
                    </div>
                  
                </div>
            </div>
            <MainPageChild />

        </div>

    );
};

export default Signin;




