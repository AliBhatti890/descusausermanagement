import React from "react";
import logo from '../Svg Icons/Group35.png';
import googlelogo from '../Svg Icons/google_logo.png';
import HandWaving from '../SVG/HandWaving.png';
import { useNavigate } from "react-router-dom";
import MainPageChild from "../Child Component/MainPageChild";



const Signup: React.FC = () => {

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/OrganizationSetup');
    };


    return (
        <div className="grid grid-cols-2 h-screen w-screen ">
            <div className="relative bg-gray-50 p-8">
                <div className="absolute top-14 left-14">
                    <img src={logo} alt="Nova HR Logo" className="w-48" />
                </div>

                <div className="grid  justify-center items-end h-full">
                    <div className="flex-col items-center p-12">
                        <div className="flex flex-col items-start mb-2">
                            <div className="grid">
                                <h1 className="text-4xl font-bold text-center  flex items-center">
                                    Welcome to
                                    <span className="bg-gradient-to-r from-[#F25C2C] via-[#FCB23F] to-[#1F7973] bg-clip-text text-transparent ">
                                        Nova HR
                                    </span>
                                    <img src={HandWaving} alt="Hand Waving" className=" h-20 w-20 rotate-20" />
                                </h1>
                                <div>
                                <p className="text-[16px] text-start text-[#393939]">
                                Get started - it's free. No Credit Card Needed
                            </p>
                                </div>
                                
                            </div>
                          
                        </div>

                        <div className=" items-start w-full">

                            <button className="flex items-center  justify-center border border-[#D0D0D0] rounded-md px-4 py-2 w-full  text-sm font-medium text-gray-700 hover:bg-gray-100 ">
                                <img src={googlelogo} alt="Google Logo" className="w-5 h-5 mr-0" />
                                Continue with Google
                            </button>

                            <div className="flex items-center w-full  my-1">
                                <hr className="w-full border-gray-300" />
                                <span className="px-2 text-gray-400">OR</span>
                                <hr className="w-full border-gray-300" />
                            </div>

                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full  mb-2 text-sm text-center"
                            />
                            <button
                                className="bg-[#307D6F] text-white rounded-md px-4 py-2 w-full  text-sm font-medium"
                                onClick={handleNavigation}>
                                Next
                            </button>


                        </div>

                    </div>

                    <p className="mt-7 text-[14px] text-[#393939] text-center">
                        Already Have an Account? <a href="" className="text-[#F25C2C] underline" onClick={() => navigate('/Signin')}>Sign In</a>
                    </p>
                </div>
            </div>
          <MainPageChild />

        </div>
    );
};

export default Signup