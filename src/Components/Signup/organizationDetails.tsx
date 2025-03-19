import React from "react";
import logo from '../Svg Icons/Group35.png';
import { useNavigate } from "react-router-dom";
import SignInChild from "../Child Component/SignInChild";

const organizationDetails: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/Team');
  };

  const handlePrevious = () => {
    navigate('/organizationSetup');
  };

  return (


    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="relative bg-gray-50 p-8">
        <div className="absolute top-14 left-14">
          <img src={logo} alt="Nova HR Logo" className="w-48" />
        </div>
        <div className="grid  justify-center items-center h-full">
          <form className="w-full p-6 px-20">
            <h1 className="font-bold text-2xl text-[#393939] mb-3 font-bricolage">Complete The Details!!</h1>
            <label className="block  text-[15px] mb-1 font-bricolage" > Add details of your organization</label>
            <div className="grid grid-cols-4  mb-2">
              <input type="text" placeholder="Enter Name" className="col-span-2 border border-gray-300 rounded-tl-lg rounded-bl-lg px-4 py-2" />
              <input type="text" placeholder="Work Nature" className="border border-gray-300 px-4 py-2" />
              <input type="text" placeholder="Fiscal Year" className="border border-gray-300 rounded-tr-lg rounded-br-lg px-4 py-2" />
            </div>

            <label className="block  text-[15px] mb-1 font-bricolage" >Add Unit</label>
            <div className="grid grid-cols-5 gap-1 mb-2">
              <input type="text" placeholder="Unit Name" className="border border-gray-300 rounded-md px-4 py-2 col-span-2" />
              <input type="text" placeholder="Location" className="border border-gray-300 rounded-md px-4 py-2 col-span-3" />
            </div>

            <div className="grid grid-cols-3 gap-1 mb-2">
              <input type="text" placeholder="Address" className="col-span-2 border border-gray-300 rounded-md px-4 py-2" />
              <input type="text" placeholder="Contact" className="col-span-1 border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div className="grid grid-cols-4 gap-1 mb-2">
              <input type="text" placeholder="Currency" className="col-span-2 w-full border border-gray-300 rounded-md px-4 py-2" />
              <input type="text" placeholder="Tax Category" className="col-span-2 w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div className="flex gap-2">
              <button className="bg-white hover:bg-[#307D6F] hover:text-white text-[#307D6F] border border-[#307D6F] rounded-md px-4 py-2 w-full  text-sm font-medium"
                onClick={handlePrevious}> Previous</button>
              <button className="bg-[#307D6F] text-white rounded-md px-4 py-2 w-full  text-sm font-medium"
                onClick={handleNavigation}> Next</button>
            </div>
          </form>

        </div>
      </div>
      <SignInChild backgroundImage="'/fame2.png'" stepNumber={2} percentage={40} heading="What is an enterprise?" Paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae eleifend purus, a tristique neque. Phasellus a lacinia elit, id condimentum dolor. Proin quis eros vel ex pretium tempus quis at mi. Integer ut mauris nec libero dictum consectetur sit amet tincidunt velit. Mauris pellentesque sodales magna, nec finibus justo venenatis sit amet. " />




    </div>
  );
};

export default organizationDetails;



