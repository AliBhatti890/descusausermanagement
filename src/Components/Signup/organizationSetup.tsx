import React from "react";
import logo from '../Svg Icons/Group35.png';
import { useNavigate } from "react-router-dom";
import SignInChild from "../Child Component/SignInChild";



const organizationSetup: React.FC = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/OrganizationDetails');
    };
    const handlePrevious = () => {
        navigate('/');
      };
      


    return (
        <div className="grid grid-cols-2 h-screen w-screen">
            <div className="relative bg-gray-50 p-8">
                <div className="absolute top-14 left-14">
                    <img src={logo} alt="Nova HR Logo" className="w-48" />
                </div>
                <div className="grid  justify-center items-end h-full">
                    <div className="flex-col items-center p-12">
                        <div className="flex flex-col items-start mb-2">
                            <div className="flex items-center">
                                <h1 className="text-4xl font-bold text-center  flex items-center">
                                    It will take just
                                    <span className="bg-gradient-to-r from-[#F25C2C] via-[#FCB23F] to-[#1F7973] bg-clip-text text-transparent ml-2">
                                        5 minutes
                                    </span>
                                    {/* <img src={HandWaving} alt="Hand Waving" className="ml-2 h-20 w-20 rotate-20" /> */}
                                </h1>
                            </div>
                            <p className="text-[16px] text-center text-[#393939]">
                                Organization Setup
                            </p>
                        </div>

                        <div className=" items-start w-full">
                            <input
                                type="email"
                                placeholder="Enter your Organization name"
                                className="border border-gray-300 rounded-md px-4 py-2   mb-2 text-sm text-s w-full"
                            />
                            <div className="flex gap-2">
                                <button className="bg-white hover:bg-[#307D6F] hover:text-white text-[#307D6F] border border-[#307D6F] rounded-md px-4 py-2 w-full  text-sm font-medium"
                                    onClick={handlePrevious}> Previous</button>
                                <button className="bg-[#307D6F] text-white rounded-md px-4 py-2 w-full  text-sm font-medium"
                                    onClick={handleNavigation}> Next</button>
                            </div>


                        </div>

                    </div>

                    <p className="mt-7 text-[14px] text-[#393939] text-center">
                        Already Have an Account? <a href="" className="text-[#F25C2C] underline" onClick={() => navigate('/Signin')} >Sign In</a>
                    </p>
                </div>
            </div>


            <SignInChild backgroundImage="'/fame2.png'" stepNumber={1} percentage={20} heading="Organization Setup" Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque. Phasellus a lacinia elit, id condimentum dolor. Proin quis eros vel ex pretium tempus quis at mi. Integer ut mauris nec libero dictum consectetur sit amet tincidunt velit. Mauris pellentesque sodales magna, nec finibus justo venenatis sit amet."
            
            />




        </div>
    );
};

export default organizationSetup;


