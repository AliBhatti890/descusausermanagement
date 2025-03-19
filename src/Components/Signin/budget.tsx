import React from 'react';
import logo from '../Svg Icons/Group35.png'; // Your logo image
import team from '../Svg Icons/team.png'; // Your illustration image

    const Budget: React.FC = () => {
    return (
        <div className="flex h-screen ">
            {/* Left Side - Form Section */}
            <div className="w-1/2 flex flex-col justify-center items-start p-16 bg-white">
                
                {/* Header with Logo */}
                <header className="flex justify-start w-full mb-12 border border-red-500">
                    <img src={logo} alt="Nova HR Logo" className="w-36" />
                </header>

                {/* Form */}
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-4">Create A Position</h1>

                    {/* Form Inputs */}
                    <input 
                        type="text" 
                        placeholder="Position" 
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                    />
                    <input 
                        type="text" 
                        placeholder="Reporting to" 
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                    />
                    <input
                        type="text" 
                        placeholder="Summary" 
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                       
                    />
                    <input
                        type="text" 
                        placeholder="Job Description" 
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                      
                    />
                    <input
                        type="text" 
                        placeholder="Job Requirements" 
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                      
                    />

                    {/* Next Button */}
                    <button className="bg-[#307D6F] text-white rounded-md px-4 py-2 w-full mt-4 text-sm font-medium">
                        Next
                    </button>

                    {/* Info text */}
                    <p className="text-sm text-gray-500 mt-4">
                        Dont get upset!! if you forgot anything you can edit it later.
                    </p>
                </div>
            </div>

            {/* Right Side - Content Section */}
            <div className="relative w-1/2 bg-[#307D6F] flex flex-col justify-center p-8">
                {/* Step Progress */}
                
                <div className="text-white mb-6">
                    <h2 className="text-xl font-bold">Step 01</h2>
                    <div className="w-3/4 h-2 bg-white rounded-full mt-5 relative">
                        <div className="w-1/6 h-full bg-orange-400 rounded-full"></div>
                        
                    </div>
                    <br/>
                    <h3 className="absolute top-16 right-auto text-white text-2xl font-bold">What is Branding?</h3>

                    <p className="mt-12 text-sm leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque...
                        </p>
                    
                </div>

                {/* Illustration */}
                <img src={team} alt="" className="w-[500px] h-auto" />

                {/* Help Button */}
                <button className="absolute bottom-12 right-16 bg-orange-500 text-white rounded-full px-6 py-2">
                    I am always here to help you!
                </button>

                {/* Rotated Text */}
                <div className="fixed w-[991px] h-[999px] top-[32%] left-[100%] transform -translate-x-full -translate-y-1/2 rotate-90 opacity-60 font-bricolage-grotesque text-[41px] font-extrabold leading-[65px] tracking-[-0.05em] text-white text-right">
                    MAKING HUMAN RESOURCES SIMPLE!!
                </div>
            </div>
        </div>
    );
};

export default Budget;